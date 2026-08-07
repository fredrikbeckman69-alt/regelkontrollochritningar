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
    
    # Query Document table records
    cmd = 'docker exec autocom-app npx -y tsx -e "const { PrismaClient } = require(\'@prisma/client\'); const prisma = new PrismaClient(); prisma.document.findMany({ select: { id: true, title: true, category: true, filePath: true } }).then(docs => console.log(JSON.stringify(docs)));"'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    
    if out:
        try:
            docs = json.loads(out)
            print(f"Found {len(docs)} rules in database:")
            for d in docs:
                print(f"Title: {d.get('title')}")
                print(f"  Category: {d.get('category')}")
                print(f"  File Path: {d.get('filePath')}")
                print("-" * 40)
        except Exception as parse_err:
            print("Failed to parse JSON output. Raw output:")
            print(out)
        
except Exception as e:
    print("Failed to query DB:", str(e))
finally:
    ssh.close()
