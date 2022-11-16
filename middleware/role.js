const { handleHttpError } = require("../utils/handleError")

/**
 * Array con los roles a verifcar
 * @param {*} arrayRoles 
 * @returns 
 */
const checkRole = (arrayRoles) => (req, res, next) => {
    try {
        const {user} = req
        const rolesByUser = user.role;
        //Comparar roles
        const checkValueRole = arrayRoles.some((rolSingle) => rolesByUser.includes(rolSingle)) //True or False
        if(!checkValueRole) handleHttpError(res,"USER_NOT_PERMISSIONS",403)
        next()
    } catch (error) {
        handleHttpError(res,"ERROR_PERMISSIONS",403)
    }
}

module.exports = checkRole;