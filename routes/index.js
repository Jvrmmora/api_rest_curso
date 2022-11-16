const express = require("express")
const fs = require("fs")
const router = express.Router() // maneja las rutas express

const PATH_ROUTES = __dirname; //ESCANEAR TODOS LOS ARCHIVOS QUE SE ENCUENTRAN DIRECTORIO LA RUTA

const removeExtension = (fileName) => { //QUITAMOS LA EXTENSION
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file)
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`)) //CARGA DINAMICA DE LA RUTA
    }
})



module.exports = router