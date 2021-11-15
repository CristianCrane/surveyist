const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

// passportJs need to know how to serialize a user into a cookie
passport.serializeUser((user, done) => {
    done(null, user.id); // users mongo generated ID, not googleId incase we support multiple oauth providers
});

// passportJs need to know how to deserialize a cookie into a user
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (token, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
        return done(null, existingUser);
    }

    const user = new User({ googleId: profile.id }).save();
    done(null, user);
}));