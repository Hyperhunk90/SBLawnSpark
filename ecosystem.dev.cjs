module.exports = {
  apps: [{
    name: 'southern-buck-lawn-dev',
    script: 'npx',
    args: 'vite dev --host 0.0.0.0 --port 3000',
    cwd: '/home/user/webapp',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    }
  }]
}