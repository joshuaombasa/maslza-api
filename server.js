const express = require("express")

const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const MONGO_URL = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1`

const PORT = 4001

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`Connected to MongoDB database`)
    })
    .catch(error => {
        console.log(error)
    })


const equipmemtRoutes = require("./routes/equipment")
const vendorRoutes = require("./routes/vendors")
const loginRoutes = require("./routes/login")

app.use('/api/equipment', equipmemtRoutes)
app.use('/api/vendors', vendorRoutes)
app.use('/api/login', loginRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})