

const mongoose = require('mongoose');

async function connectDB() {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {
        await mongoose.connect(
            process.env.MONGODB_URI,
            connectionParams
        )
        console.log("Database connected successfully")
    } catch (error) {
       console.log("Database Connection Failed", error)
    }
}

module.exports = connectDB;
