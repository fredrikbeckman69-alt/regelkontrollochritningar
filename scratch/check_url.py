import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('192.168.19.13', 22, 'fredrikadmin', 'JBCUanT2s2h7!')

cmd = "curl -i -H 'Host: regelkontrollochritningar.192.168.19.13.nip.io' http://localhost:80"
stdin, stdout, stderr = ssh.exec_command(cmd)

print("=== CURL OUTPUT ===")
print(stdout.read().decode('utf-8')[:1000])

ssh.close()
