const { tokenNew } = require('../token');

const Login = async (req, res) => {
    const { email } = req.body;
    const token = await tokenNew(email);
    return res.status(200).json({ token });
};
module.exports = {
    Login,
};