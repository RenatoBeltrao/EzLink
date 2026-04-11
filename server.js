import fastify from 'fastify'
import {sequelize} from './database/database.js'
import { appRoutes } from './routes.js';
import cors from '@fastify/cors'
import { errorHandler } from './middleware/errorHandler.js';

const server = fastify({ logger: true})

console.log(process.env.username_db);
console.log(process.env.password_db);

async function testarConexao() {
    try {
        //conecta com o banco
        await sequelize.authenticate();
        console.log('Conexão com o banco feita com sucesso!');

        await server.register(cors, { 
            origin: ["http://localhost:5500", "http://127.0.0.1:5500"]
        });

        server.setErrorHandler(errorHandler)

        //as requisicoes
        appRoutes(server)

        //criar a tabela se não existir
        await sequelize.sync({ alter: true });

        await server.listen({
            port:3333,
        })

        
        console.log('tudo ok')
    } catch (error) {
        console.error('Erro ao conectar:', error);
    }
}

testarConexao();
