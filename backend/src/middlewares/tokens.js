const jwt = require('jsonwebtoken');



exports.verifyJWT = (req, res, next) =>{
    
    const token = req.headers.authorization
    console.log(token)
    
    if (!token){
        res.send('we need a token')
    }else{
        jwt.verify(token, process.env.JWT_SECRETO, (err, decoded) =>{
        if (err){
            res.json({auth: false, message: "u failed to authenticate"});
        }else{

            req.userId = decoded.id;
            console.log(req.userId)
            console.log("nasiu")
            next();

        }});
    }
}