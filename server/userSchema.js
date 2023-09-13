const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// const sliderSchema = new mongoose.Schema({
//     title: { type: String, default: "Title" },
//     range: { type: Number, default: 10 },
//     weight: { type: Number, default: 50 }
// })


// const checkersSchema = new mongoose.Schema({
//     key: String,
//     value: Number,
// }, { _id: false })


// const countersSchema = new mongoose.Schema({
//     key: String,
//     value: Number,
// }, { _id: false })



// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     googleId: { type: String },
//     settings: {
//         health: {
//             slider: sliderSchema,
//             checkers: [checkersSchema],
//             counters: [countersSchema],
//         },
//         wealth: {
//             slider: sliderSchema,
//             checkers: [checkersSchema],
//             counters: [countersSchema],
//         },
//         happiness: {
//             slider: sliderSchema,
//             checkers: [checkersSchema],
//             counters: [countersSchema],
//         },
//         nodo: {
//             slider: sliderSchema,
//             checkers: [checkersSchema],
//             counters: [countersSchema],
//         }
//     }
// })

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    googleId: { type: String },
    settings: { type: Object }
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