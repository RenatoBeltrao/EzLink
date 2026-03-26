import fastify from 'fastify'
import {sequelize} from './database/database.js'

const server = fastify()

console.log(process.env.username_db);
console.log(process.env.password_db);

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco feita com sucesso!');
        await server.listen({
            port:3333,
        })
        console.log('tudo ok')
    } catch (error) {
        console.error('Erro ao conectar:', error);
    }
}

testarConexao();
