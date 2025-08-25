module.exports = {
  apps: [{
    name: 'southern-buck-lawn-preview',
    script: 'npx',
    args: 'vite preview --host 0.0.0.0 --port 3000',
    cwd: '/home/user/webapp',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
}