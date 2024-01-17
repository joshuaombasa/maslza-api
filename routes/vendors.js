const mongoose = require("mongoose")
const express = require("express")
const vendorSchema = require("../models/vendor")
// const MONGO_URL = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1`

// mongoose.connect(MONGO_URL)
//     .then(() => {
//         console.log('Connected Successfully to MongoDB')
//     })
//     .catch(error => {
//         console.log(error)
//     })

const Vendor = mongoose.model("Vendor", vendorSchema)

const router = express.Router()

router.get('/', (req, res) => {
    Vendor.find({})
        .then((vendors) => {
            res.status(200).json(vendors)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.get('/', (req, res) => {
    Vendor.find({})
        .then((vendors) => {
            res.status(200).json(vendors)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    Vendor.findOne({ _id: id })
        .then((vendor) => {
            res.status(200).json(vendor)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.post('/', (req, res) => {
    const newVendor = new Vendor({
        firstName: "Joshua",
        lastName: "Ombasa",
        isActive: false,
        products: ["Truck", "Tesla Model X"],
        imageUrl: "joshua.jpg"
    })
    newVendor.save()
        .then((vendor) => {
            res.status(200).json(vendor)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    Vendor.findByIdAndUpdate(id, {
        isActive: true
    }).then((vendor) => {
        res.status(200).json(vendor)
    })
        .catch(error => {
            res.status(400).json(error)
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    Vendor.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: "Vendor deleted successfully" })
        })
        .catch(error => {
            res.status(400).json(error)
        })

})

module.exports = router

