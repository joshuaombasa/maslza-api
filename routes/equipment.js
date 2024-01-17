const express = require("express")
const mongoose = require("mongoose")
// const MONGO_URL = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1`

// mongoose.connect(MONGO_URL)
//     .then(() => {
//         console.log(`Connected to MongoDB database`)
//     })
//     .catch(error => {
//         console.log(error)
//     })

const equipmentSchema = require("../models/equipment")
const Equipment = mongoose.model("Equipment", equipmentSchema)

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const equipment = await Equipment.find()
        res.status(200).json(equipment)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/', async (req, res) => {
    const newEquipment = new Equipment({
        type: "grader",
        price: "5000",
        name: "Bush Master",
        imageUrl: "",
        status: "working"
    })

    try {
        await newEquipment.save()
        res.status(200).json(newEquipment)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Equipment.findById(id)
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.put('/:id', (req,res) => {
    const id = req.params.id
    Equipment.findByIdAndUpdate(id, {status: "working"})
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    Equipment.findByIdAndDelete(id, {status: "working"})
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

module.exports = router