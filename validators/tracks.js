const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")



const validatorCreateItem = [
    check("name")
    .exists() // QUE EXISTA
    .notEmpty(), // NO SEA VACIA
    check("album")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("cover")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("artist")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("artist.name")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("artist.nickname")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("artist.nationality")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("duration")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("duration.start")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("duration.end")
    .exists() // QUE EXISTA
    .notEmpty(),
    check("mediaId")
    .exists() // QUE EXISTA
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];
const validatorGetItem = [
    check("id")
    .exists() // QUE EXISTA
    .notEmpty(), // NO VACIO
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorCreateItem,validatorGetItem}