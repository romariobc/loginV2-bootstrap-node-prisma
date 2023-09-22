const { Prisma, PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const buscar = async ()=> {
    return prisma.usuarios.findMany()
}

const buscarPeloLogin = async ()=> {
    return prisma.usuarios.findUnique(
        {where: {Login: login}}
    );
}

const criar = async ()=> {
    const user = {
        login:'romario.teste', senha: '123456'
    }
    return prisma.usuarios.create({
        data:user
    })
}

const usuarioRepository = {buscar, criar, buscarPeloLogin}

module.exports = usuarioRepository
