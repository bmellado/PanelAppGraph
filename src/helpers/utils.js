const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { JWT_SECRET_KEY } = process.env;

const generateToken = (user) => {
  const userId = user.id;
  const { email } = user;
  const payload = { userId, email };
  const accessToken = jwt.sign(payload, JWT_SECRET_KEY);
  return accessToken;
};

const getUserPassword = (user, password) => {
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      return generateToken(user);
    }
    return false;
  });
};

module.exports = { generateToken, getUserPassword };
