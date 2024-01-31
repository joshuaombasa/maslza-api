const mongoose = require("mongoose")


const userSchema = require("../models/user")


const User = mongoose.model("User", userSchema)

exports.loginUser = (req, res) => {
   res.status(200).json({ message: 'Login successful' })

   // const email = req.body.email
   // User.find({ email: email })
   //    .then((user) => {
   //       res.status(200).json({ message: 'Login successful' })
   //    })
   //    .catch(error => {
   //       res.status(400).json({ message: 'Login unsuccessful' })
   //    })
}