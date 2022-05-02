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
// Load User model
const db = require('./models');
const Role = db.role;
const User = db.user;
const { ROLES } = db;
initial = () => {
  ROLES.forEach((role) => {
    Role.create({
      name: role,
    });
  });
  User.create({
    name: 'Master',
    email: 'master@gmail.com',
    roleId: 1,
    password: bcrypt.hashSync('root', 8),
    unHashedPassword: 'root',
  });
};

router.post('/api/account/login', controller.signin);

// routes
require('./routes/auth.routes')(app);

module.exports = app;
