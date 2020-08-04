module.exports = {
  apps: [{
    name: 'app',
    cwd: './public/',
    script: 'npm',
    args: ['run', 'dev'],
    watch: false
  }, {
    name: 'server',
    cwd: './server/',
    script: "./app.js",
    exec_mode: 'cluster',
    watch: false
  }]
}