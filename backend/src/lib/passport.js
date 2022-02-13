const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use('local.sigup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    

}));