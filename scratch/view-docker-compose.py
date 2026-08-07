import paramiko

host = "192.168.19.13"
port = 22
username = "fredrikadmin"
password = "JBCUanT2s2h7!"

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    ssh.connect(host, port, username, password)
    
    cmd = 'cat /opt/antigravity/Lokal-Server-setup/docker-compose.yml'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    
    print("docker-compose.yml contents:")
    print(out)
            
except Exception as e:
    print("Failed to cat file:", str(e))
finally:
    ssh.close()
