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

module.exports = {
    userNew,
    allFind,
};