const express = require("express")
const mongoose = require("mongoose")
const { loginUser } = require("../controllers/login")


const router = express.Router()


router.post('', loginUser)

module.exports = router