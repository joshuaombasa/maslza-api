const mongoose = require("mongoose")

const equipmentSchema = require("../models/equipment")
const Equipment = mongoose.model("Equipment", equipmentSchema)


exports.getAllEquipment = async (req, res) => {
    userModel = require()
    try {
        const equipment = await Equipment.find()
        res.status(200).json(equipment)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.createEquipment = async (req, res) => {
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
}

exports.getOneEquipment = (req, res) => {
    const id = req.params.id
    Equipment.findById(id)
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

exports.modifyEquipment = (req, res) => {
    const id = req.params.id
    Equipment.findByIdAndUpdate(id, { status: "working" })
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

exports.deleteEquipment = (req, res) => {
    const id = req.params.id
    Equipment.findByIdAndDelete(id, { status: "working" })
        .then(equipment => {
            res.status(200).json(equipment)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}