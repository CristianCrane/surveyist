const passport = require('passport');

module.exports = (app) => {
    // initializes auth flow to google
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // accepts the auth response from google
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    // passportJs adds a bunch of properties to the req object, logout() is one of them
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/user', (req, res) => {
        res.send(req.user);
    })
};
