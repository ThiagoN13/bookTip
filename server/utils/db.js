/* Database driver and plugins */
const mongoose = require('mongoose')
const { db = {} } = require('../config/env')

module.exports = {
  connect () {
    mongoose
      .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        retryWrites: false,
        useFindAndModify: false
      })
      .then(_ => {
        console.log(`💾 Connect with MongoDB on ${db.url} port is success!`)
      })
      .catch(err => {
        console.error(err.stack)
        process.exit(1)
      })
  }
}