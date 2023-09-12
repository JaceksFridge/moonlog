const express = require("express")
const router = express.Router()
const User = require("./userSchema")
const jwt = require("jsonwebtoken")
const ScoreLog = require("./schema.js")
const middleware = require('./middleware')


// save username + password in db
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = new User({ username, password })
    
        await user.save()
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret')
        res.json({ token, username, userId: user._id })
    } catch (err) {
        if (err.code == 11000) {
            res.status(409).json({ error: 'Username already taken'})
        } else {
            res.status(500).json({ error: 'Something went wrong '})
        }
    }
})


// compare entered username, password with db
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(401).json({ error: "Incorrect username "})
        }
        const isMatch = await user.isValidPassword(password)
        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password "})
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret')
        res.json({ token, username, userId: user._id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})



// get data as home loads
router.get('/home', middleware, async (req, res) => {
    try{
        const latestEntry = await ScoreLog.findOne({ userId: req.user.id }).sort({ _id: -1 })
        console.log("latest entry:", latestEntry)
        res.json(latestEntry)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
})



// Delete Entry = re-score
router.delete('/delete-score', async (req, res) => {
    
    try {
      const { userId, date } = req.body
      console.log(userId, date)

      const deletedEntries = await ScoreLog.deleteMany({ userId: userId, date: date })

      if (deletedEntries.n === 0) {
        return res.status(404).send({ url: '/delete-score/:userId', message: "No matching entry found" });
      }

      res.status(200).send({ message: `Deleted ${deletedEntries.n} entries successfully.` });

    } catch (err) {
        res.status(500).send({ err: "An Error occurred" });
    }
});


  


// get all the score for scores.js
router.get('/scores/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        const scoreLogs = await ScoreLog.find({ userId: userId }).sort({ _id: -1 });
        res.json(scoreLogs);
    } catch (err) {
        console.log("Error getting documents", err);
        res.status(500).json({message: 'Error getting data.'});
    }
})


module.exports = router