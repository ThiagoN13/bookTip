// env variables add
require('dotenv').config()

/* App constant from .env */
const { http = {}, https = {} = {}, ssl, socket } = require('./config/env')
const isDev = process.env.NODE_ENV !== 'production'

/* Base libraries */
const fs = require('fs')
const path = require('path')
const httpsConnector = require('https')

/* Express and plugins */
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')

const rfs = require('rotating-file-stream')
const { generator } = require('./utils/logs')

/* Database driver and plugins */
const database = require('./utils/db')

const server = express()

/* Add logging */
const logDirectory = path.join(__dirname, 'logs')
// Create directory if it not exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// Create rotate file stream
const accessLogStream = rfs(generator, {
  size: '10M',
  interval: '1d', // rotate daily
  path: logDirectory,
})

/* Init app */

// Add assets
server.use(morgan('combined', { stream: accessLogStream }))
server.use(express.json()) // replaced a body-parser
server.use(compression())
server.use(cors())
server.use(helmet())
server.use(cookieParser())

// Routes
const { applyTo } = require('./routes')

// Run server call
database.connect()

// Run routes
applyTo(server)


server.listen(http.port, err => {
  if (err) throw err
  console.log(`👍 API server running on ${http.port} port`)
})

// https server
if (!isDev) {
  httpsConnector.createServer(ssl, server).listen(https.port, err => {
    if (err) throw err
    console.log(`👍 API server with SSL running on ${https.port} port`)
  })
}