const mongoose = require("mongoose")

 const vendorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    isActive: Boolean,
    products: [String],
    imageUrl: String
 })

 module.exports = vendorSchema