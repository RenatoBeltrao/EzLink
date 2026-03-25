import fastify from 'fastify'

const server = fastify()

console.log("oi")

server.listen({
    port:3333,
})