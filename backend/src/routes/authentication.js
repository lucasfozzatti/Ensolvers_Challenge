const express = require('express');
const router = express.Router();
const pool = require('../database')
const authController = require('../controllers/user')
const middlewares = require('../middlewares/tokens')

router.post('/register',authController.register);

router.post("/login", authController.login);

router.get('/isUserAuth', middlewares.verifyJWT, (req, res)=>{
    res.send("you are authenticated, congrats")
});


module.exports = router;