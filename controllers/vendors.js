const mongoose = require("mongoose")


const vendorSchema = require("../models/vendor")
const Vendor = mongoose.model("Vendor", vendorSchema)

exports.getAllVendors = (req, res) => {
    Vendor.find({})
        .then((vendors) => {
            res.status(200).json(vendors)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}


exports.createVendor = (req, res) => {
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
}


exports.getOneVendor = (req, res) => {
    const id = req.params.id

    Vendor.findOne({ _id: id })
        .then((vendor) => {
            res.status(200).json(vendor)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}


exports.modifyVendor = (req, res) => {
    const id = req.params.id
    Vendor.findByIdAndUpdate(id, {
        isActive: true
    }).then((vendor) => {
        res.status(200).json(vendor)
    })
        .catch(error => {
            res.status(400).json(error)
        })
}


exports.removeVendor = (req, res) => {
    const id = req.params.id

    Vendor.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: "Vendor deleted successfully" })
        })
        .catch(error => {
            res.status(400).json(error)
        })

}