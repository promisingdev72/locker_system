const express = require('express');
const cors = require('cors');
const app = express();
// const path = require('path');
const bodyParser = require('body-parser');
const config = require('../models/db');
const validator = require('validator');

const corsOptions = {
  origin: 'http://localhost:8080',
  // origin: 'http://34.68.219.73/'
};

// const publicPath = path.join(__dirname, '../build');

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('*', (req, res, next) => {
  console.log('This is middleware');
});

app.post('/api/account/login', (req, res) => {
  const result = {
    email: req.body.email,
    password: req.body.password,
  };

  validator.isEmail(result.email);
  validator.isLength({ min: 6 });

  connection.query('INSERT * from users LIMIT 1', (err, rows) => {
    if (err) throw err;
    console.log('The data from users table are: \n', rows);
    connection.end();
  });
  console.log(result);
  res.send();
});

module.exports = app;
