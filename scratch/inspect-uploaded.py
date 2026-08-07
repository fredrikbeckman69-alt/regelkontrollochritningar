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
    cmd = 'docker exec autocom-app npx -y tsx -e "const { PrismaClient } = require(\'@prisma/client\'); const prisma = new PrismaClient(); prisma.uploadedDocument.findMany({ select: { id: true, customName: true, originalName: true, filePath: true, complianceStatus: true } }).then(docs => console.log(JSON.stringify(docs)));"'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    
    if out:
        try:
            docs = json.loads(out)
            print(f"Found {len(docs)} uploaded documents in database:")
            for d in docs:
                print(f"ID: {d.get('id')}")
                print(f"  Custom Name: {d.get('customName')}")
                print(f"  Original Name: {d.get('originalName')}")
                print(f"  File Path: {d.get('filePath')}")
                print(f"  Compliance Status: {d.get('complianceStatus')}")
                print("-" * 40)
        except Exception as parse_err:
            print("Failed to parse JSON. Raw output:")
            print(out)
            
except Exception as e:
    print("Failed to query DB:", str(e))
finally:
    ssh.close()
