const bcryptjs = require("bcryptjs")

/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => { //ENCRIPTA EL TEXTO PLANO
    const salt = 10 // es la aleatoridad de la encriptacion
    const hash = await bcryptjs.hash(passwordPlain,salt) //version encriptada de texto plano 
    return hash
}
/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain,hashPassword) => { // HASH GUARDADO Y COMPARA CON EL TEXTO PLANO
    return await bcryptjs.compare(passwordPlain,hashPassword)
}

module.exports = { encrypt, compare };