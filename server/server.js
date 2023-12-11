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

app.get('/lol', (req, res) => {
    res.send('Hello, loll!');
});

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



// const moment = require('moment');
// const mongoose = require('mongoose');

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// async function generateDocuments() {
//     const startDate = moment("6 October 2023", "D MMMM YYYY");
//     for (let i = 0; i < 50; i++) {
//       const date = startDate.add(1, 'days').format("D. MMMM YYYY");
//       const healthValue = getRandomInt(100, 500);
//       const wealthValue = getRandomInt(100, 500);
//       const happinessValue = getRandomInt(100, 500);
//       const nodoValue = getRandomInt(100, 500);
//       const sumValue = getRandomInt(500, 3000);
//       const changeValue = getRandomInt(0, 100);
  
//       const documentData = {
//         health: healthValue,
//         wealth: wealthValue,
//         happiness: happinessValue,
//         nodo: nodoValue,
//         sum: sumValue,
//         change: changeValue,
//         subscores: {
//           health: { "yoga": 200, "run": 100, "food": 350 },
//           wealth: { "learn": 450, "app": 200, "work": 100 },
//           happiness: { "day": 550, "fun": 100, "new_thing": 50 },
//           nodo: { "caffeine": -250, "alcohol": -100 }
//         },
//         date: date,
//         time: new Date().toLocaleTimeString(),
        
//         userId: new mongoose.Types.ObjectId('6489ee3f42d5e930b417fa36')  
//       };
      
//       try {
//         const scoreLog = new ScoreLog(documentData);
//         await scoreLog.save();
//         console.log('Document saved successfully:', scoreLog);
//       } catch (error) {
//         console.error('Error:', error);
//         throw error;
//       }
//     }
//   }

// generateDocuments()





const port = process.env.PORT || 8000;

// Start Live Server
app.listen(port, () => {
    console.log("Server running on Port: 8000")
})
