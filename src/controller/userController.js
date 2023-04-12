const { tokenNew } = require('../token');
const { userService } = require('../service');

const newUser = async (req, res) => {
    const { email } = req.body;
    userService.userNew(req.body);
    const token = await tokenNew(email);
    return res.status(201).json({ token });
};

const findAll = async (req, res) => {
    const allUser = await userService.allFind();
    return res.status(200).json(allUser);
};
module.exports = {
    newUser,
    findAll,
};