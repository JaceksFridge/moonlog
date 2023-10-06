

const mongoose = require('mongoose');

async function connectDB() {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        await mongoose.connect(
            'mongodb+srv://natasha:dFVeMrmryyXQvIlH@cluster0.dglcvxz.mongodb.net/moonlog',
            connectionParams
        )
        console.log("Database connected successfully")
    } catch (error) {
       console.log("Database Connection Failed", error)
    }
}

module.exports = connectDB;
