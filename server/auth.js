
const passport = require("passport")
const router = require('express').Router()
const User = require('./userSchema')
const jwt = require('jsonwebtoken');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require('dotenv').config();



const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const callbackURL = process.env.CALLBACK_URL;


passport.use(new GoogleStrategy({
    clientID:     clientID,
    clientSecret: clientSecret,
    callbackURL: callbackURL,
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {

        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
            user = new User({
            username: profile.displayName,
            googleId: profile.id,
            });
            await user.save();
        }
        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
  
  const token = jwt.sign({ id: req.user._id }, 'your_jwt_secret');
  res.redirect(`http://localhost:3000/?token=${token}`);
  });

  module.exports = router;



