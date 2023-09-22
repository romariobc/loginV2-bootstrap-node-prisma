const usuarioRepository = require('../Repositores/usuarioRepository');

const buscar = async()=> {
    const retorno = await usuarioRepository.buscar()
    return retorno
}

const criar = async(credenciais)=>{
    const resposta = await usuarioRepository.criar(credenciais)
    return resposta
}

const login = async(credenciais)=> {
    const usuario = await usuarioRepository.buscarPeloLogin(credenciais.login)    

    if(usuario && usuario.senha === credenciais.senha){
        return true
    }else false
}

const usuarioService = {buscar, criar, login}

module.exports = usuarioService
