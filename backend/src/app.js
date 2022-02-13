// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan')

// const app = express();

// // settings
// app.set('port', process.env.PORT || 4000);

// // middlewares 
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended:false}));
// app.use(cors());
// app.use(express.json());

// // routes
// // app.use('/api/notes', require('./routes/notes'));
// // app.use('/api/users', require('./routes/users'));
// app.use(require('./routes'));
// app.use(require('./routes/authentication'));
// app.use('./links', require('./routes/links'));

// //starting server
// app.listen(app.get('port'));
//     console.log('Server on port', app.get('port'));


// module.exports = app;
