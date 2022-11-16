const { matchedData } = require('express-validator');
const { encrypt, compare } = require("../utils/handlePassword")
const { usersModel } = require("../models")
const { tokenSign,verifyToken } = require("../utils/handleJwt")
const { handleHttpError } = require('../utils/handleError');


/**
 * Este es el controlador encargado de registrar un user
 * @param {*} req 
 * @param {*} res 
 */
const register = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = {...req,password} // "..." split operator
        const dataUser = await usersModel.create(body)
        dataUser.set("password", undefined, {strict:false}); //Filtrar para no mostrar la contraseña

        const data = {
            token: await tokenSign(dataUser),
            user:dataUser,
        }
        res.send({data})
    } catch (error) {
        console.log(error)
        handleHttpError(res,'ERROR_TO_REGISTER_USER')
    }
}
/**
 * Este contrador es el encargado de hacer login
 * @param {*} req 
 * @param {*} res 
 */
const login = async (req, res) => {
    try {
        req = matchedData(req) //DATA CURADA SOLO QUE NECESITO
        const ENGINE_DB = process.env.ENGINE_DB;
        var user;
        (ENGINE_DB === 'nosql') ? user = await usersModel.findOne({email:req.email}).select('password name role email') : user = await usersModel.findOne({email:req.email})
        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404);
            return
        }
        const hashPassword = user.get('password');
        const check = await compare(req.password,hashPassword)
        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }
        user.set("password", undefined, {strict:false}); //Filtrar para no mostrar la contraseña
        const data = {
            token:await tokenSign(user),
            user
        }
        res.send({data})
    } catch (error) {
        console.log(error)
        handleHttpError(res,'ERROR_LOGIN_USER')
    }
}

module.exports = { register, login }