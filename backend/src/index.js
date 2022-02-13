// require('dotenv').config();
// const app = require('./app');
// require('./database');

// async function main() {
//     await app.listen(app.get('port'));
//     console.log('Server on port', app.get('port'));
// }

// main();
//################################################

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const app = express();

// settings
app.set('port', process.env.PORT || 4000);


// middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());

//Global variables

app.use((req,res,next)=>{
    next();
});

//seteamos Las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con Las cookies
app.use(cookieParser())

// routes
// app.use('/api/notes', require('./routes/notes'));
// app.use('/api/users', require('./routes/users'));
// app.use(require('./routes'));
app.use(require('./routes/authentication'));
// app.use('/links', require('./routes/links'));
app.use('/register', require('./routes/authentication'));
app.use(require('./routes/tasks'));
app.use(require('./routes/folders'));

//starting server
app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));



