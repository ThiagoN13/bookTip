const express = require('express')
const router = express.Router()

const AuthController = require('../../controllers/auth')

router.post('/livros', AuthController.create)
router.get('/livros', AuthController.get)
router.put('/livros', AuthController.put)
router.delete('/livros', AuthController.remove)

module.exports = router
