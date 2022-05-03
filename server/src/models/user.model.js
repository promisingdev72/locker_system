module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    email: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.INTEGER,
    },
  });
  return User;
};
