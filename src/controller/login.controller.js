const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const Login = async (req, res) => {
    const { email } = req.body;
    const jwtConfig = {
        algorithm: 'HS256',
      };
    const token = jwt.sign(email, secret, jwtConfig);
    return res.status(200).json({ token });
};
module.exports = {
    Login,
};