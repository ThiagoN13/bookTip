const express = require('express')
const router = express.Router()
const io = require('../../utils/socket-io')

const MensagensController = require('../../controllers/mensagens')

io.on('connection', function (socket) {
  console.log("Connected!")
})

router.get('/mensagens', MensagensController.get)

module.exports = router
