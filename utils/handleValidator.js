const { validationResult } = require("express-validator")

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next(); //CONTINUA AL CONTROLLER
    } catch (err) {
        res.status(403); // CODIGO NO PERMITIDO
        res.send({ errors: err.array() });
    }
}

module.exports = validateResults