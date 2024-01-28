const userSchema = require("../models/user")
const userModel = require("../models/user")

const User = mongoose.model("User", userSchema)
function loginUser() {
    (req,res) => {
        User.find({email: email})
             .then((user) => {
                res.status(200).json({message: 'Login successful'})
             })
             .catch(error => {
                res.status(400).json({message: 'Login unsuccessful'})
             })
    }
}