const passport = require('passport');

module.exports = (app) => {
    // initializes auth flow to google
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // accepts the auth response from google
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/auth/logout', (req, res) => {
        // passportJs adds a bunch of properties to the req object, logout() is one of them
        req.logout();
    })
};
