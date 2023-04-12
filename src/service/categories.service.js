const { Category } = require('../models');

const categorieNew = async ({ name }) => {
    const newRegister = await Category.create({ name });
    return newRegister;
};
const findAll = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    categorieNew,
    findAll,
};