const { categoriesService } = require('../service');

const newCategorie = async (req, res) => {
    const categorie = await categoriesService.categorieNew(req.body);
    return res.status(201).json(categorie);
};
module.exports = {
    newCategorie,
};