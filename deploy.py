import os
import tarfile
import paramiko
import sys
import time

host = "192.168.19.13"
port = 22
username = "fredrikadmin"
password = "JBCUanT2s2h7!"

local_tar = "deploy.tar.gz"
remote_tar = "/tmp/autocom_deploy.tar.gz"
remote_dir = "/opt/antigravity/Autocom"
server_setup_dir = "/opt/antigravity/Lokal-Server-setup"

def progress_callback(transferred, total):
    percent = (transferred / total) * 100
    sys.stdout.write(f"\rTransferring: {percent:.2f}% ({transferred}/{total} bytes)")
    sys.stdout.flush()

print("--- 1. Packaging local files to tar.gz ---")
# Create tar.gz excluding heavy/build files
with tarfile.open(local_tar, "w:gz") as tar:
    for root, dirs, files in os.walk("."):
        # Prune directories in place to prevent os.walk from entering them
        # Only prune root-level heavy/unwanted folders, keep others (like src/app/macros)
        if root == "." or root == ".\\" or root == "./":
            dirs[:] = [d for d in dirs if d not in [
                'node_modules', '.next', '.git', 'Assets', 'brain', 'MCF dokument',
                'extracted_images', 'uploads', 'macros'
            ]]
        else:
            dirs[:] = [d for d in dirs if d not in [
                'node_modules', '.next', '.git'
            ]]
        for file in files:
            if (file.endswith(".tar.gz") or 
                file == ".env.local" or 
                file.startswith("temp_") or 
                file == "dev.db" or 
                file == "dev.db-journal"):
                continue
            path = os.path.join(root, file)
            # Add to archive with relative path
            tar.add(path)
print("Packaging complete: deploy.tar.gz created.")

print("\n--- 1.5. Pushing changes to Git Remote ---")
import subprocess
try:
    remotes = subprocess.check_output(["git", "remote"], stderr=subprocess.STDOUT).decode('utf-8')
    if "origin" in remotes:
        print("Git remote 'origin' found. Checking for changes to commit and push...")
        status = subprocess.check_output(["git", "status", "--porcelain"]).decode('utf-8').strip()
        if status:
            print("Uncommitted changes found. Committing automatically...")
            subprocess.run(["git", "add", "."])
            subprocess.run(["git", "commit", "-m", "Auto-commit before deploy"])
        
        branch = subprocess.check_output(["git", "rev-parse", "--abbrev-ref", "HEAD"]).decode('utf-8').strip()
        print(f"Pushing current branch '{branch}' to origin...")
        subprocess.run(["git", "push", "origin", branch])
        print("Git push completed successfully.")
    else:
        print("No git remote 'origin' configured. Skipping Git push.")
except Exception as e:
    print(f"Git operations skipped or failed: {str(e)}")

print("\n--- 2. Connecting to Linux server ---")
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
try:
    ssh.connect(host, port, username, password)
    print("Connected to SSH successfully.")
except Exception as e:
    print("SSH connection failed:", str(e))
    sys.exit(1)

# Helper to run commands
def run_ssh(cmd, use_sudo=False):
    if use_sudo:
        print(f"Running sudo: {cmd}")
        stdin, stdout, stderr = ssh.exec_command(f"sudo -S {cmd}")
        stdin.write(password + '\n')
        stdin.flush()
    else:
        print(f"Running: {cmd}")
        stdin, stdout, stderr = ssh.exec_command(cmd)
    
    out = stdout.read().decode('utf-8', errors='ignore').strip()
    err = stderr.read().decode('utf-8', errors='ignore').strip()
    if out:
        print("STDOUT:")
        print(out.encode('ascii', errors='ignore').decode('ascii'))
    if err:
        # Ignore sudo password prompt from stderr log
        if "[sudo] password" not in err:
            print("STDERR:")
            print(err.encode('ascii', errors='ignore').decode('ascii'))
    return out

print("\n--- 3. Uploading package via SFTP ---")
sftp = ssh.open_sftp()
sftp.put(local_tar, remote_tar, callback=progress_callback)
print("\nUpload complete.")

print("\n--- 4. Extracting files on server ---")
# Ensure directory exists with correct permissions
run_ssh(f"mkdir -p {remote_dir}", use_sudo=True)
run_ssh(f"chown -R {username}:{username} {remote_dir}", use_sudo=True)
# Extract package
run_ssh(f"tar -xzf {remote_tar} -C {remote_dir}")
# Ensure uploads and macros folders exist and are writable by Docker nextjs user
run_ssh(f"mkdir -p {remote_dir}/public/uploads {remote_dir}/public/macros")
run_ssh(f"chmod -R 777 {remote_dir}/public/uploads {remote_dir}/public/macros")
# Clean up remote tar
run_ssh(f"rm {remote_tar}")

# Sync local .env to remote if it exists
if os.path.exists('.env'):
    print("\n--- 5. Syncing .env configuration ---")
    sftp.put('.env', f"{remote_dir}/.env")
sftp.close()

print("\n--- 6. Registering service in Docker Compose ---")
stdin, stdout, stderr = ssh.exec_command(f"cat {server_setup_dir}/docker-compose.yml")
compose_content = stdout.read().decode('utf-8', errors='ignore')

if "autocom-app:" not in compose_content:
    print("Adding autocom-app to docker-compose.yml...")
    service_definition = """
  autocom-app:
    build:
      context: "../Autocom"
      dockerfile: Dockerfile
    container_name: autocom-app
    restart: unless-stopped
    env_file:
      - "../Autocom/.env"
    networks:
      - server-net
"""
    # Insert new service before networks block
    if "networks:" in compose_content:
        compose_content = compose_content.replace("networks:", service_definition + "\nnetworks:", 1)
        
        # Save updated compose file
        # Write temporary file and move it with sudo
        temp_compose = "/tmp/docker-compose.yml"
        sftp_client = ssh.open_sftp()
        with sftp_client.open(temp_compose, "w") as f:
            f.write(compose_content)
        sftp_client.close()
        
        run_ssh(f"mv {temp_compose} {server_setup_dir}/docker-compose.yml", use_sudo=True)
        print("docker-compose.yml updated.")
else:
    print("autocom-app is already registered in docker-compose.yml.")

print("\n--- 7. Registering routing in Caddyfile ---")
stdin, stdout, stderr = ssh.exec_command(f"cat {server_setup_dir}/Caddyfile")
caddy_content = stdout.read().decode('utf-8', errors='ignore')

caddy_updated = False

# 1. Clean up the conflicting standalone block at the bottom
conflicting_start = "http://regelkontrollochritningar.192.168.19.13.nip.io"
if conflicting_start in caddy_content:
    print("Removing conflicting standalone block from Caddyfile...")
    caddy_content = caddy_content.split(conflicting_start)[0].strip() + "\n"
    caddy_updated = True

# 2. Check if autocom/regelkontrollochritningar is registered inside http:// block
if "regelkontrollochritningar.192.168.19.13.nip.io" not in caddy_content and "Host ^(autocom|regelkontrollochritningar)" not in caddy_content:
    print("Adding regelkontrollochritningar routing to http:// block...")
    caddy_handle = """
    @autocom host autocom.192.168.19.13.nip.io regelkontrollochritningar.192.168.19.13.nip.io
    handle @autocom {
        reverse_proxy autocom-app:3000
    }
"""
    if "handle @bcapi {" in caddy_content:
        target = """    handle @bcapi {
        reverse_proxy bc-api-app:5000
    }"""
        replacement = target + "\n\n" + caddy_handle
        caddy_content = caddy_content.replace(target, replacement, 1)
        caddy_updated = True
    else:
        print("Warning: handle @bcapi block not found, could not insert routing automatically.")

# 3. If Caddyfile was updated, upload it and reload Caddy
if caddy_updated:
    print("Uploading updated Caddyfile to server...")
    temp_caddy = "/tmp/Caddyfile"
    sftp_client = ssh.open_sftp()
    with sftp_client.open(temp_caddy, "w") as f:
        f.write(caddy_content)
    sftp_client.close()
    
    run_ssh(f"cp {temp_caddy} {server_setup_dir}/Caddyfile", use_sudo=True)
    run_ssh(f"rm {temp_caddy}")
    print("Caddyfile updated on server (inode preserved).")
    
    # Reload Caddy config gracefully
    print("Reloading Caddy proxy service...")
    run_ssh("docker exec caddy-proxy caddy reload --config /etc/caddy/Caddyfile")
else:
    print("Caddyfile routing is already clean and correctly registered.")

print("\n--- 8. Rebuilding and starting Docker container ---")
# Temporarily stop netdata-monitor to free up 2GB of RAM for the build
run_ssh("docker stop netdata-monitor")
print("Paused netdata-monitor to free memory.")

# Rebuild and start container
run_ssh(f"docker compose -f {server_setup_dir}/docker-compose.yml up -d --build autocom-app caddy", use_sudo=True)

print("Waiting 10 seconds for the container to start before running prisma...")
time.sleep(10)

print("\n--- 9. Running database schema sync on server ---")
# Run prisma db push inside the container as root
run_ssh("docker exec -u root autocom-app npx prisma@5.22.0 db push --skip-generate")

# Restart netdata-monitor
run_ssh("docker start netdata-monitor")
print("Restarted netdata-monitor.")

ssh.close()
# Remove local tar file with graceful fallback for OneDrive locks
if os.path.exists(local_tar):
    try:
        os.remove(local_tar)
    except Exception as e:
        print(f"Warning: Could not remove local tar file {local_tar} (likely locked by OneDrive): {e}")

print("\n=========================================================================")
print("Driftsättning slutförd! Portal är tillgänglig på:")
print("http://regelkontrollochritningar.192.168.19.13.nip.io")
print("=========================================================================")

