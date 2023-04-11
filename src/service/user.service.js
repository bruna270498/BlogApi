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

module.exports = {
    userNew,
};