const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    googleId: { type: String }
})

userSchema.pre("save", async function (next) {
    if (this.password && (this.isModified("password") || this.isNew)) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
    }
    next()
})



userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("user", userSchema)


module.exports = User