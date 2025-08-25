module.exports = {
  apps: [{
    name: 'southern-buck-express',
    script: 'server.cjs',
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