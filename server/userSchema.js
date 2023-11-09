

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const sliderSchema = new mongoose.Schema({
    title: { type: String },
    range: { type: Number },
    weight: { type: Number }
}, { _id: false });

const categorySchema = new mongoose.Schema({
    inactive: { 
        slider: { type: sliderSchema, default: undefined },
        checkers: { type: mongoose.Schema.Types.Mixed, default: undefined },
        counters: { type: mongoose.Schema.Types.Mixed, default: undefined }
     },
    active: {
        slider: { type: sliderSchema, default: undefined },
        checkers: { type: mongoose.Schema.Types.Mixed, default: undefined },
        counters: { type: mongoose.Schema.Types.Mixed, default: undefined }
     }
});



const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    googleId: { type: String },
    settings: {
        health: { type: categorySchema, default: null },
        wealth: { type: categorySchema, default: null },
        happiness: { type: categorySchema, default: null },
        nodo: { type: categorySchema, default: null }
    }
})

userSchema.pre("save", async function (next) {
    if (this.password && (this.isModified("password") || this.isNew)) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    }
    next();
})

userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("user", userSchema);

module.exports = User;
