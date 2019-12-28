module.exports = {
  apps : [{
    name: 'Blog',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '256M',
    log_file: './logs/combined.log',
    error_file:'./logs/error.log',
    out_file:'./logs/out.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '0.0.0.0',
      ref  : 'origin/master',
      repo : 'https://github.com/jackeyang/gitbook.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
