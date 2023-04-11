const { loginService } = require('../service');

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return next();
};

const validateEmail = async (req, res, next) => {
    const { email, password } = req.body;
    const dataValues = await loginService.login(email);
    if (dataValues === null || dataValues.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    return next();
};

module.exports = {
    validateEmail,
    validateLogin,
};