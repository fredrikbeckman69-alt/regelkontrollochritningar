import paramiko

host = "192.168.19.13"
port = 22
username = "fredrikadmin"
password = "JBCUanT2s2h7!"

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    ssh.connect(host, port, username, password)
    
    cmd = 'docker exec autocom-app sqlite3 prisma/dev.db "SELECT id, customName, originalName, filePath, complianceStatus, createdAt FROM UploadedDocument;"'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    
    print("Database records in container sqlite3:")
    print(out)
            
except Exception as e:
    print("Failed to query container DB:", str(e))
finally:
    ssh.close()
