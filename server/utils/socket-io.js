const config = require('../config/env')
const PORT = config.socket.port

const io = require('socket.io')(PORT)

console.log(`Server runing in ${PORT}`)

module.exports = io