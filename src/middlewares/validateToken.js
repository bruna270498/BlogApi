const { validateToken } = require('../token');

const tokenValid = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(401).json({
                message: 'Token not found' });
        }
        const infoToken = await validateToken(authorization);
        console.log(infoToken)
        req.user = infoToken; 
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Expired or invalid token' });
    }
};
module.exports = tokenValid;