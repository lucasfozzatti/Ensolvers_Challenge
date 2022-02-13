const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../database')
const saltRounds = 10


exports.register = async (req, res)=>{
    const { username, password } = req.body;
    console.log("sldgñldsgfñdsñg",username,password)
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err){
          console.log(err)
        }
        pool.query("INSERT INTO users (username, password) VALUES (?,?)", [username, hash], (err, result) => {
          console.log(err);
        })

    })}
//Cambiar if y eliminar else
exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    pool.query(
    "SELECT * FROM users WHERE username = ?; ",
    username,
    (err, result) => {
        if (err) {
            res.send({ err: err });
            return
        }
        if (!result.length > 0) {
            res.json({auth: false, message: "no user exists"});
            return
        }
        console.log(result[0].id)
        bcrypt.compare(password, result[0].password, (error, response) => {
            
            if(!response){
                res.json({auth: false, message: "wrong username/password combination"});
                return
            }
            const id = result[0].id
            const token = jwt.sign({id}, process.env.JWT_SECRETO, {
                expiresIn: 3000
                })
            //generamos el token SIN fecha de expiracion
            //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
            console.log("TOKEN: "+token+" para el USUARIO : "+ username)
                
            res.json({auth: true, token: token, result: result[0].id});
            
            
        })
    }
    );
};
