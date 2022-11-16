const {storageModel} = require('../models')
const mongoose = require('mongoose');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const fs = require("fs") //FILE SYSTEM

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`;
/**
* Obtener lista de BD
* 
*/
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({}); //ESPERA HASTA QUE RETORNE
        res.send({data})
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
        const {id} = matchedData(req);
        const data = await storageModel.findById(id); //ESPERA HASTA QUE RETORNE
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
        const { file } = req;
    const fileData = {
        filename:file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
    } catch (error) {
        handleHttpError(res,'ERROR_CREATE_ITEMS')
    }
};
/**
* Actualizar registro de BD
* 
*/
const updateItem = async (req, res) => {};
/**
* Eliminar registro de BD
* 
*/
const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await  storageModel.deleteOne({_id:id})
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath)
        const data = {
            filePath,
            deleted:1
        }
        res.send({data})
    } catch (error) {
        handleHttpError(res,'ERROR_DELETE_ITEM')
    }
};

module.exports = { getItems,getItem,createItem,updateItem,deleteItem };