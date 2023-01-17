const express = require('express')
const { register } = require('../controllers/userControllers')
const router = express.Router()

// GET home page


// Post a request
router.post('/register', register)


module.exports = router