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
    cmd = 'docker exec autocom-app npx -y tsx -e "const { PrismaClient } = require(\'@prisma/client\'); const prisma = new PrismaClient(); prisma.uploadedDocument.findFirst({ select: { id: true, customName: true, rawText: true } }).then(doc => console.log(JSON.stringify(doc)));"'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    
    if out:
        try:
            doc = json.loads(out)
            print(f"Document ID: {doc.get('id')}")
            print(f"Name: {doc.get('customName')}")
            print(f"Raw Text (first 2000 chars):")
            print(doc.get('rawText')[:2000])
        except Exception as parse_err:
            print("Failed to parse JSON")
            
except Exception as e:
    print("Failed to query DB:", str(e))
finally:
    ssh.close()
