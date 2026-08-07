import paramiko

host = "192.168.19.13"
port = 22
username = "fredrikadmin"
password = "JBCUanT2s2h7!"

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    ssh.connect(host, port, username, password)
    
    # List files in uploads folder
    cmd = 'ls -la /opt/antigravity/Autocom/public/uploads/'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    
    print("Files in /opt/antigravity/Autocom/public/uploads/:")
    print(out)
            
except Exception as e:
    print("Failed to list uploads:", str(e))
finally:
    ssh.close()
