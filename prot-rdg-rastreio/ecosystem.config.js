module.exports = {
  apps : [{
    name: 'API',
    script: './app.js',
    wait_ready: true,
    listen_timeout: 3000,
    exec_mode: 'cluster',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 'max',
    autorestart: true,
    watch: true,
    max_memory_restart: '256M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};





