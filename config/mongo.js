const mongoose = require("mongoose"); //DECLARADO EL PAQUETE

const NODE_ENV = process.env.NODE_ENV

const dbConnectNoSql = () => { //ARROW FUCTION
    const DB_URI = (NODE_ENV === 'test') ?  process.env.DB_URI_TEST : process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }, (err,res) => {
        if(!err){
            console.log('**** Conexion correcta con la BD :) **** ')
        }else{
            console.log('**** Conexion ERRONEA con la BD :c **** ')
        } 
    });
};

module.exports = dbConnectNoSql //SE EXPORTA