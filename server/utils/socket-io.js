const config = require('../config/env')
const PORT = config.socket.port

const io = require('socket.io')(PORT)

console.log(`👍 Server websocket runing on ${PORT} port`)

module.exports = io