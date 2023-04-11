const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenNew = async (email) => {
    const jwtConfig = {
        algorithm: 'HS256',
      };
    const token = jwt.sign(email, secret, jwtConfig);
    return token;
};
const validateToken = async (token) => {
  const isValid = jwt.verify(token, secret);
  return isValid;
};
module.exports = {
  tokenNew,
  validateToken,
};