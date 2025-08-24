module.exports = {
  apps: [{
    name: 'southern-buck-lawn-care',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    watch: false,
    autorestart: true,
    max_memory_restart: '500M'
  }]
};