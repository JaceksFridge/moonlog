const express = require("express")
const cors = require('cors');
const passport = require("passport")
const session = require('express-session')
const bodyParser = require('body-parser')
require('dotenv').config();



const connectDB = require("./db.js")
const ScoreLog = require("./schema.js")
const userRoutes = require("./userRoutes")
const authRoutes = require('./auth.js')

const app = express()

app.use(cors());
app.use(bodyParser.json())

app.use(session({
    secret: 'hellotherer',
    resave: false,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());



app.use('/user', userRoutes)
app.use(authRoutes)



connectDB();

// post submitted data to db
app.post('/api/my-endpoint', async (req, res) => {
    let object = req.body

    try {
        const scoreLog = new ScoreLog(object);
        await scoreLog.save();
       
        res.json({message: 'Data received and saved successfully.'})

    } catch (err) {

        console.log("Error inserting Document", err)
        res.status(500).json({message: 'Error saving data.'});
    }
})



const port = process.env.PORT || 8000;



// Start Live Server
app.listen(port, () => {
    console.log("Server running on Port: 8000")
})
