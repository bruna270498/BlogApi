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

const findById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.findById(id);
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist' });
    }
    return res.status(200).json(user);
};
module.exports = {
    newUser,
    findAll,
    findById,
};