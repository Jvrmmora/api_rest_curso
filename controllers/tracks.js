const {tracksModel} = require('../models')
const mongoose = require('mongoose');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');


/**
* Obtener lista de BD
* 
*/
const getItems = async (req, res) => {
    try {
        const user = req.user; //OBTENGO EL USER
        const data = await tracksModel.findAllData({}); //ESPERA HASTA QUE RETORNE
        const count = data.length
        res.send({data,count})
        
    } catch (error) {
        handleHttpError(res,'ERROR_GET_ITEMS')
    }

};
/**
* Obtener detalle de BD
* 
*/
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await tracksModel.findOneData(id); //ESPERA HASTA QUE RETORNE
        res.send({data})
    } catch (error) {
        handleHttpError(res,'ERROR_GET_ONE_ITEM')
    }
};
/**
* Insertar registro de BD
* 
*/
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data= await tracksModel.create(body)
        res.send({data})
    } catch (error) {
        handleHttpError(res,'ERROR_CREATE_ITEMS')
    }

};
/**
* Actualizar registro de BD
* 
*/
const updateItem = async (req, res) => {
    try {
        const {id,...body} = matchedData(req)
        const data= await tracksModel.findOneAndUpdate(id, body,{ new: true })
        res.send({data})
    } catch (error) {
        handleHttpError(res,'ERROR_UPDATE_ITEMS')
    }
};
/**
* Eliminar registro de BD
* 
*/
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req;
        // const data = await tracksModel.deleteOne({_id:id}); //METODO BORRADO FISICO
        const data = await tracksModel.delete({_id:id}); //METODO BORRADO LOGICO
        res.send({data})
    } catch (error) {
        handleHttpError(res,'ERROR_DELETE_ITEM')
    }
};

module.exports = { getItems,getItem,createItem,updateItem,deleteItem };