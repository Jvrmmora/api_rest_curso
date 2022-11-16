const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorRegister = [
    check("name")
    .exists() // QUE EXISTA
    .notEmpty() // NO VACIO
    .isLength({min:3, max:99}), //LONGITUD DE CARACTERES
    check("age")
    .exists() // QUE EXISTA
    .notEmpty() // NO VACIO
    .isNumeric({min:8, max:99}), //ES UN NUMERO
    check("password")
    .exists() // QUE EXISTA
    .notEmpty() // NO VACIO
    .isLength({min:3, max:15}), //LONGITUD DE CARACTERES
    check("email")
    .exists() // QUE EXISTA
    .notEmpty() // NO VACIO
    .isEmail(), // ES UN EMAIL
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];
const validatorLogin = [
    check("email")
    .exists() // QUE EXISTA
    .notEmpty() // NO VACIO
    .isEmail(), // ES UN EMAIL
    check("password")
    .exists() // QUE EXISTA
    .notEmpty() // NO VACIO
    .isLength({min:3, max:15}), //LONGITUD DE CARACTERES
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorRegister,validatorLogin}