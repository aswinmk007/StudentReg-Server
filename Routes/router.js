const express = require('express')
const studentController = require('../Controllers/studentController')


const router = new express.Router()

//register
router.post('/register',studentController.register)
//get details
router.get('/register',studentController.getStudentDetails)

//export router
module.exports = router