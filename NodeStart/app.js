const express = require('express');
const {MongoClient} = require('mongodb');
const url = "mongodb+srv://mcartera:pastelevine@cluster0.o8jgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);

try{
    client.connect();
}
catch(err){
    console.log(err);
}
// const locationRoutes = require('./routes/location');

const app = express();

// // app.set('view engine', 'ejs');
// // app.set('views', 'views');

// app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.use(locationRoutes);

// // app.use((req, res, next) => {
// //   res.setHeader('Content-Type', 'text/html');
// //   next();
// // });

// // app.use((req, res, next) => {
// //   const userName = req.body.username || 'Unknown User';
// //   res.render('index', {
// //     user: userName
// //   });
// // });

 app.listen(3000);
