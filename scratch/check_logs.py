import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('192.168.19.13', 22, 'fredrikadmin', 'JBCUanT2s2h7!')

stdin, stdout, stderr = ssh.exec_command('sudo -S docker logs --tail 100 autocom-app')
stdin.write('JBCUanT2s2h7!\n')
stdin.flush()

print("=== DOCKER LOGS ===")
print(stdout.read().decode('utf-8', errors='ignore').encode('ascii', errors='ignore').decode('ascii'))
print("=== STDERR ===")
print(stderr.read().decode('utf-8', errors='ignore').encode('ascii', errors='ignore').decode('ascii'))

ssh.close()
