const mongoose = require("mongoose")

 const equipmentSchema = new mongoose.Schema({
    type: String,
    price: String,
    name: String,
    imageUrl: String,
    status: {type: String, default: 'working'}
 })

 module.exports = equipmentSchema