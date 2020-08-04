/**
 * Apply all exists routes to app
 * @param app
 */
module.exports = {
  applyTo (app) {
    app.use('/api', require('./auth'))
    app.use('/api', require('./mensagens'))
    app.use('/api', require('./livros'))
  }
}
