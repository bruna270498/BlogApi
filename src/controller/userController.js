const tokenNew = require('../token');
const { userNew } = require('../service/user.service');

const newUser = async (req, res) => {
    const { email } = req.body;
    userNew(req.body);
    const token = await tokenNew(email);
    return res.status(201).json({ token });
};
module.exports = {
    newUser,
};