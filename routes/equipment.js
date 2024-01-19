const express = require("express")
const mongoose = require("mongoose")

const equipmentSchema = require("../models/equipment")
const Equipment = mongoose.model("Equipment", equipmentSchema)
const equipmentCtrl = require("../controllers/equipment")

const router = express.Router()

router.get('/', equipmentCtrl.getAllEquipment)

router.post('/', equipmentCtrl.createEquipment)

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