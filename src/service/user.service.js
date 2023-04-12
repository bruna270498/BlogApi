const { User } = require('../models');

const userNew = async ({ displayName, email, password, image }) => {
    const newRegister = await User.create({
        displayName,
        email,
        password,
        image,
    });
    return newRegister;
};
const allFind = async () => {
    const allUser = await User.findAll({
        attributes: { exclude: ['password'] },
      });
    
    console.log(allUser);
    return allUser;
};

const findById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
      });
    return user;
};

module.exports = {
    userNew,
    allFind,
    findById,
};