require("dotenv").config()//INCORORA LAS VARIABLES DE ENTORNO
const express = require("express") //PAQUETE EXPRESS LEVANTA EL SERVER SERVICIO WEB
const cors = require("cors") // APP CREADA USAR PLUGIN CORS EVITA EL USO CRUZADO
const morganBody = require("morgan-body")
const loggerStream = require("./utils/handleLogger")
const dbConnectNoSql = require("./config/mongo")
const {dbConnectMySql} = require("./config/mysql")
const app = express()
const swaggerUI = require("swagger-ui-express")
const openApiConfigration = require("./docs/swagger")
const ENGINE_DB = process.env.ENGINE_DB
const NODE_ENV = process.env.NODE_ENV || "development"

app.use(cors());
app.use(express.json());//TRAE EL BODY QUE ME DE FRONTEND
app.use(express.static("storage"));//RECURSOS PUBLICOS 


morganBody(app,{
    noColors:true,
    stream:loggerStream,
    skip:function(req,res){
        return res.statusCode < 400
    }
});


const port  = process.env.PORT || 3000 //PUERTO DE LA APP

/**
 * Definir ruta para la documentacion en Swagger
 */

app.use('/docs',
    swaggerUI.serve, 
    swaggerUI.setup(openApiConfigration))


/**AQUI INVOCAMOS LAS RUTAS */
app.use("/api", require("./routes"));

if(NODE_ENV !== 'test'){ //EVITA QUE SI ESTOY HACIENDO PRUEBAS SE LEVANTE LA APP
    app.listen(port, () => {
        console.log('APP OK lista: '+port); //ESCUCHA POR EL PUERTO CON EL MSG
    });
}

(ENGINE_DB === 'nosql') ? dbConnectNoSql()  : dbConnectMySql()

module.exports = app //exportamos express
