const usuarioService = require('../Services/usuarioService')

const buscar =  async (req, res)=> {
    try {
        const retorno = await usuarioService.buscar();
        res.send(retorno);
    }catch(error){
        res.status(500).send({error: error.mensage})
    }
};

const criar = async (req, res)=> {
    try{
        const retorno = await usuarioService.criar()
        res.send(retorno)
    }catch(error){
        res.status(500).send({error: error.mensage})
    }
};

const login = async (req, res)=> {
    try{
        const retorno = await usuarioService.login(req.body)
        if(retorno){
            res.sendStatus(200)
        }else{
            res.sendStatus(401)
        }

    }catch(error){
        res.status(500).send({error: error.mensage})
        }
};

const usuarioController = {buscar, criar, login}

module.exports = usuarioController;