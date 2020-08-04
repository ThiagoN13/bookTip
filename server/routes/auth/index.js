const express = require('express')
const router = express.Router()

const AuthController = require('../../controllers/auth')

router.post('/auth/login', AuthController.login)
router.post('/auth/logout', AuthController.logout)

router.post('/auth', AuthController.create)
router.get('/auth', AuthController.get)
router.put('/auth', AuthController.put)
router.delete('/auth', AuthController.remove)


module.exports = router
