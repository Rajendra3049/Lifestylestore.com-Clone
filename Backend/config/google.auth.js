const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")

passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      console.log(profile)
      return cb(null, "user");
    // });

  } 
));
module.exports={passport}