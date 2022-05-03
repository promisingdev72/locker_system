const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const corsOptions = {
  origin: 'http://localhost:8080',
  // origin: 'http://34.68.219.73/'
};
// const publicPath = path.join(__dirname, '../build');
// app.use(express.static(publicPath));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });
app.use(cors(corsOptions.origin));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
require('./routes/auth.routes')(app);

module.exports = app;
