const express = require("express")

const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const MONGO_URL = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1`

const PORT = 4001

const equipment = {}


const app = express()

app.use(cors())

mongoose.connect(MONGO_URL)
         .then(() => {
            console.log(`Connected to MongoDB database`)
         })

app.get('/api/equipment', (req,res) => {
    res.status(200).json(equipment)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})