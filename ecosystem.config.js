export default {
  apps: [{
    name: 'southern-buck-website',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    watch: false,
    ignore_watch: ['node_modules', 'logs'],
    log_file: '/home/user/webapp/logs/combined.log',
    out_file: '/home/user/webapp/logs/out.log',
    error_file: '/home/user/webapp/logs/error.log',
    time: true
  }]
};