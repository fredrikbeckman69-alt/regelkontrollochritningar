import paramiko
import json

host = "192.168.19.13"
port = 22
username = "fredrikadmin"
password = "JBCUanT2s2h7!"

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    ssh.connect(host, port, username, password)
    
    # Query database records
    cmd = 'docker exec autocom-app npx -y tsx -e "const { PrismaClient } = require(\'@prisma/client\'); const prisma = new PrismaClient(); prisma.document.findMany({ select: { title: true, filePath: true } }).then(docs => console.log(JSON.stringify(docs)));"'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    
    if out:
        try:
            docs = json.loads(out)
            matching = [d for d in docs if 'genomf' in d.get('title','').lower() or 'genomf' in d.get('filePath','').lower() or 't17' in d.get('title','').lower() or 't17' in d.get('filePath','').lower()]
            print(f"Found {len(matching)} total matching rules:")
            for d in matching:
                print(f"Title: {d.get('title')}")
                print(f"  File Path: {d.get('filePath')}")
                print("-" * 40)
        except Exception as parse_err:
            print("Failed to parse JSON")
            
except Exception as e:
    print("Failed to query DB:", str(e))
finally:
    ssh.close()
