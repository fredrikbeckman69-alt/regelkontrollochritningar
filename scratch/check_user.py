import paramiko

host = "192.168.19.13"
port = 22
username = "fredrikadmin"
password = "JBCUanT2s2h7!"

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    ssh.connect(host, port, username, password)
    
    cmd = 'docker exec autocom-app ls -la /app/public/uploads'
    
    stdin, stdout, stderr = ssh.exec_command(cmd)
    print("ls -la /app/public/uploads in container:")
    print(stdout.read().decode('utf-8').strip())
            
except Exception as e:
    print("Failed:", str(e))
finally:
    ssh.close()
