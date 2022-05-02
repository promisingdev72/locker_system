const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
// const path = require('path');
const bodyParser = require('body-parser');
// const publicPath = path.join(__dirname, '../build');

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/api/account/login', function (req, res) {
  const result = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log(result);
  res.send();
});

module.exports = app;
