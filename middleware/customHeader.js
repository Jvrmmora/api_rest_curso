const customHeader = (req, res, next) => {
    try {
        const {api_key} = req.headers;
        if(api_key === 'jvrmmora-28'){
            next()
        }else{
            res.status(403)
            res.send({error:"API_KEY_ES_INCORRECTO"})
        }
    }catch (error) {
        res.status(403)
        res.send({error:"ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"})
    }
}

module.exports = customHeader