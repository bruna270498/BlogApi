const { User } = require('../models');

const login = async (email) => {
    const infoPessoal = await User.findOne({ where: { email } });
    return infoPessoal;
};
module.exports = {
    login,
};