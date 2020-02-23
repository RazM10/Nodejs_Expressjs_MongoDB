const express = require('express');
const app = express();

const mongoose = require('mongoose');
// var url="mongodb://localhost:27017/userDB";
require('dotenv/config');
const bodyParser = require("body-parser");
const usersRoute = require('./routes/users');

//mongoose
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    else console.log('Connected to DB');
});

//middleware
app.use(bodyParser.json());
//import routes

app.use('/users', usersRoute);

//routes
app.get('/', (req, res) => {
    console.log('We are on Home');
    res.send('We are on Home');
});

app.listen(3000);