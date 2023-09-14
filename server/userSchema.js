

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const sliderSchema = new mongoose.Schema({
    title: { type: String, default: "Title" },
    range: { type: Number, default: 10 },
    weight: { type: Number, default: 50 }
})

const categorySchema = new mongoose.Schema({
    slider: { type: sliderSchema, default: {} },
    checkers: { type: mongoose.Schema.Types.Mixed, default: {} },
    counters: { type: mongoose.Schema.Types.Mixed, default: {} }
})

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    googleId: { type: String },
    settings: {
        health: { type: categorySchema, default: {} },
        wealth: { type: categorySchema, default: {} },
        happiness: { type: categorySchema, default: {} },
        nodo: { type: categorySchema, default: {} }
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
