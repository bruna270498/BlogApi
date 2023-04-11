const { User } = require('../models');

const validateName = async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long' });
    }
    return next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    const valideEmail = /\S+@\S+\.\S+/;
    const isValid = valideEmail.test(email);
    if (isValid === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    return next();
};

const emailExists = async (req, res, next) => {
    const { email } = req.body;
    const dataValues = await User.findOne({ where: { email } });
    if (dataValues) {
        return res.status(409).json({
            message: 'User already registered' });
    }
    return next();
};

const validatePassword = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long' });
    }
    return next();
};

module.exports = {
    validateName,
    validateEmail,
    emailExists,
    validatePassword,
};