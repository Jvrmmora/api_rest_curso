const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")


const validatorGetItem = [
    check("id")
    .exists() // QUE EXISTA
    .notEmpty(), // NO VACIO
    //.isMongoId(), // MONGO ID
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorGetItem}