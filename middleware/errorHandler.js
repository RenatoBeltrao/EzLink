import { DatabaseError } from 'sequelize'

export const errorHandler = (error, request, reply) => {
  //Se for um erro do sequelize
  if(error instanceof DatabaseError){
    console.log("\n\n\n\n\n\n\n\n\n"+error+"\n\n\n\n\n\n\n\n\n")
    return reply.status(400).send({
        result: null,
        status: {
            message: error.message,
            code: 400,
        },
    })
  }
  //se não 
  console.log("\n\n\n\n\n\n\n\n\n"+error+"\n\n\n\n\n\n\n\n\n")
  const code = error.statusCode 
  const message = error.message

  reply.status(code).send(
    {
        result: null,
        status: {
        message,
        code,
        },
    }

)}