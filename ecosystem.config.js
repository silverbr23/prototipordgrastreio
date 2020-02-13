module.exports = {
  apps: [{
    name: 'AppDev',
    script: './bin/www',
    wait_ready: true,
    listen_timeout: 3000,
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    watch: true,
    exec_mode: 'fork',
    autorestart: true,
    max_memory_restart: '256M',
    env: {

      "PORT": 3000,
      "NODE_ENV": 'development',
      "NODE_OPTIONS": '--inspect',
    },
  },
  {
    name: 'AppProd',
    script: './bin/www',
    wait_ready: true,
    listen_timeout: 3000,
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    watch: false,
    autorestart: true,
    exec_mode: 'cluster',
    instances: 'max',
    max_memory_restart: '256M',
    env: {
      "watch": false,
      "NODE_ENV": 'production',
    }
  }]
};






