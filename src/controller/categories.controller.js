const { categoriesService } = require('../service');

const newCategorie = async (req, res) => {
    const categorie = await categoriesService.categorieNew(req.body);
    return res.status(201).json(categorie);
};
const findAll = async (req, res) => {
    const categories = await categoriesService.findAll();
    return res.status(200).json(categories);
};

module.exports = {
    newCategorie,
    findAll,
};