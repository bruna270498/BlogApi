const { Category } = require('../models');

const categorieNew = async ({ name }) => {
    const newRegister = await Category.create({ name });
    return newRegister;
};
module.exports = {
    categorieNew,
};