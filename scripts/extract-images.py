import os
import re
import sys
import uuid
import base64
import sqlite3
import urllib.request
import urllib.error
import json
import time
from datetime import datetime

# Helper to read .env file
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
    print("=========================================================================")
    print("VARNING: Ingen GEMINI_API_KEY hittades i .env eller miljövariabler.")
    print("Bildextraktionen kommer att köras men använda standardbeskrivningar.")
    print("För att köra med AI-beskrivningar, lägg till din nyckel i .env:")
    print("GEMINI_API_KEY=din_nyckel_här")
    print("=========================================================================\n")
else:
    print("Gemini API-nyckel laddad. AI-beskrivningar kommer att genereras.\n")

# Connect to database
db_path = os.path.join('prisma', 'dev.db')
if not os.path.exists(db_path):
    print(f"Error: Database not found at {db_path}")
    sys.exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get PDF documents
cursor.execute("SELECT id, title, filePath FROM Document WHERE fileType = 'PDF'")
documents = cursor.fetchall()
print(f"Hittade {len(documents)} PDF-dokument i databasen.")

# Ensure PyMuPDF is importable
try:
    import fitz
except ImportError:
    print("Error: PyMuPDF (fitz) is not installed. Run: py -m pip install PyMuPDF")
    sys.exit(1)

# Ensure public/extracted_images directory exists
public_images_dir = os.path.join('public', 'extracted_images')
os.makedirs(public_images_dir, exist_ok=True)

total_images_extracted = 0
total_api_calls = 0

def describe_image_with_gemini(image_bytes, mime_type, key):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={key}"
    headers = {'Content-Type': 'application/json'}
    
    b64_data = base64.b64encode(image_bytes).decode('utf-8')
    
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

# Process each document
for idx, (doc_id, title, file_path) in enumerate(documents):
    pdf_path = os.path.join('MCF dokument', file_path)
    if not os.path.exists(pdf_path):
        print(f"[{idx+1}/{len(documents)}] Hoppar över: Filen finns inte: {pdf_path}")
        continue
        
    print(f"[{idx+1}/{len(documents)}] Processar: {title} ({file_path})")
    
    # Check if this document already has images in DB
    cursor.execute("SELECT COUNT(*) FROM DocumentImage WHERE documentId = ?", (doc_id,))
    existing_images_count = cursor.fetchone()[0]
    if existing_images_count > 0:
        print(f"  Dokumentet har redan {existing_images_count} indexerade bilder. Hoppar över.")
        continue

    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"  Kunde inte öppna PDF: {str(e)}")
        continue
        
    img_idx = 0
    extracted_images_in_doc = 0
    
    # Iterate over pages
    for page_num in range(len(doc)):
        # Limit to 5 images per document to avoid explosion and token limits
        if extracted_images_in_doc >= 5:
            break
            
        page = doc[page_num]
        image_list = page.get_images(full=True)
        
        for img_info in image_list:
            if extracted_images_in_doc >= 5:
                break
                
            xref = img_info[0]
            try:
                base_image = doc.extract_image(xref)
            except Exception as e:
                # Some custom images cannot be extracted easily
                continue
                
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Map extension to mime type
            mime_type = f"image/{image_ext}"
            if image_ext == "jpg":
                mime_type = "image/jpeg"
            
            # Skip very small images (icons, decorations, bullets)
            if len(image_bytes) < 1024 * 5: # Skip anything under 5KB
                continue
                
            img_idx += 1
            extracted_images_in_doc += 1
            total_images_extracted += 1
            
            # Generate unique ID and save file
            img_id = str(uuid.uuid4())
            doc_img_dir = os.path.join(public_images_dir, doc_id)
            os.makedirs(doc_img_dir, exist_ok=True)
            
            local_img_name = f"img_{img_idx}.{image_ext}"
            local_img_path = os.path.join(doc_img_dir, local_img_name)
            
            with open(local_img_path, 'wb') as f:
                f.write(image_bytes)
                
            # Public path for the client relative to public/
            public_path = f"extracted_images/{doc_id}/{local_img_name}"
            
            # Generate description
            description = None
            if gemini_key:
                print(f"  Analyserar bild {img_idx} på sida {page_num+1} med Gemini...")
                description = describe_image_with_gemini(image_bytes, mime_type, gemini_key)
                total_api_calls += 1
                # Respect rate limit
                time.sleep(1.5)
                
            if not description:
                description = f"Ritning/detalj bild {img_idx} från dokumentet: {title}. Visar teknisk skyddsrumsspecifikation."
                
            # Insert into database
            iso_now = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.%fZ')
            cursor.execute(
                "INSERT INTO DocumentImage (id, documentId, imagePath, description, createdAt) VALUES (?, ?, ?, ?, ?)",
                (img_id, doc_id, public_path, description, iso_now)
            )
            conn.commit()
            print(f"  Bild sparad & indexerad: {public_path} ({len(image_bytes)} bytes)")
            
    doc.close()
    if extracted_images_in_doc > 0:
        print(f"  Extraherade {extracted_images_in_doc} bilder från: {title}")

# Close database connection
conn.close()
print("\n=========================================================================")
print(f"Bildextraktion klar!")
print(f"Totalt extraherade och indexerade bilder: {total_images_extracted}")
print(f"Totalt anrop till Gemini API: {total_api_calls}")
print("=========================================================================")
