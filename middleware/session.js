const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const { usersModel } = require("../models")
const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()

const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization) handleHttpError(res, "NEED_TOKEN", 400)
        const token = req.headers.authorization.split(' ').pop(); //SEPARA POR ESPACIO ' ' y trae el ultimo valor del array
        const dataToken = await verifyToken(token)
        if(!dataToken) handleHttpError(res, "NO_PAYLOAD_TOKEN", 401)

        const query = {
            [propertiesKey.id]:dataToken[propertiesKey.id]
        }
        //_id:1 o id:1
        const user = await usersModel.findOne(query)
        req.user = user
        
        next()
    } catch (error) {
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

module.exports = authMiddleware