/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');
const config = require('../config/auth.config');

const User = db.user;

const { roles } = db;

const JWT_SECRET = config.secret;
const JWT_EXPIRES_IN = 86400;

exports.signin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((userData) => {
      if (!userData) {
        return res.status(400).send({ message: 'Not found user!!!' });
      }

      const passwordIsValid = bcrypt.compareSync(password, userData.password);

      if (!passwordIsValid) {
        return res.status(400).send({
          accessToken: null,
          message: 'Wrong Password!!!',
        });
      }

      const token = jwt.sign({ userId: userData.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });

      const user = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        role: roles[userData.role - 1].toUpperCase(),
      };
      const accessToken = token;

      res.status(200).send({ accessToken, user });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
