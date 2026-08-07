import os
import sqlite3
import base64
import urllib.request
import urllib.error
import json
import time

def load_env():
    env = {}
    if os.path.exists('.env'):
        with open('.env', 'r', encoding='utf-8') as f:
            for line in f:
                line_strip = line.strip()
                if '=' in line_strip and not line_strip.startswith('#'):
                    k, v = line_strip.split('=', 1)
                    env[k.strip()] = v.strip().strip('"').strip("'")
    return env

env = load_env()
gemini_key = env.get('GEMINI_API_KEY') or os.environ.get('GEMINI_API_KEY')

if not gemini_key:
    print("Error: GEMINI_API_KEY not found in .env or environment variables.")
    exit(1)

db_path = os.path.join('prisma', 'dev.db')
if not os.path.exists(db_path):
    print(f"Error: Database not found at {db_path}")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Find all placeholder descriptions
cursor.execute(
    "SELECT id, imagePath, description FROM DocumentImage WHERE description LIKE 'Ritning/detalj bild %'"
)
placeholder_images = cursor.fetchall()
print(f"Found {len(placeholder_images)} images with placeholder descriptions to update.")

def describe_image_with_gemini(image_path, key):
    if not os.path.exists(image_path):
        print(f"  Error: Image file not found at {image_path}")
        return None
        
    ext = os.path.splitext(image_path)[1].lower().replace('.', '')
    mime_type = f"image/{ext}"
    if ext == "jpg":
        mime_type = "image/jpeg"
        
    with open(image_path, 'rb') as f:
        image_bytes = f.read()
        
    b64_data = base64.b64encode(image_bytes).decode('utf-8')
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={key}"
    headers = {'Content-Type': 'application/json'}
    
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": "Beskriv denna ritning, diagram eller tabell från ett skyddsrumsdokument i detalj på svenska. Vad visar den för typ av detalj (t.ex. dörr, karm, armering, ventil, dimensioner)? Beskriv allt av värde som syns så att det blir sökbart."
                    },
                    {
                        "inlineData": {
                            "mimeType": mime_type,
                            "data": b64_data
                        }
                    }
                ]
            }
        ]
    }
    
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            text = res_data['contents'][0]['parts'][0]['text'] if 'contents' in res_data else res_data['candidates'][0]['content']['parts'][0]['text']
            return text.strip()
    except urllib.error.HTTPError as e:
        print(f"  Gemini API HTTP Error {e.code}: {e.read().decode('utf-8')}")
        return None
    except Exception as e:
        print(f"  Gemini API Error: {str(e)}")
        return None

updated_count = 0

for idx, (img_id, image_path, old_desc) in enumerate(placeholder_images):
    # Public path is like "extracted_images/doc_id/img_idx.png"
    # Local path is "public/extracted_images/doc_id/img_idx.png"
    local_path = os.path.join('public', image_path)
    
    print(f"[{idx+1}/{len(placeholder_images)}] Analyzing image: {image_path}...")
    
    desc = describe_image_with_gemini(local_path, gemini_key)
    if desc:
        cursor.execute("UPDATE DocumentImage SET description = ? WHERE id = ?", (desc, img_id))
        conn.commit()
        updated_count += 1
        print(f"  Updated: {desc[:80]}...")
        # Respect rate limit
        time.sleep(1.5)
    else:
        print("  Failed to generate description, skipping.")

conn.close()
print(f"\nFinished! Updated {updated_count} image descriptions.")
