

export class ShortCodeNotFound extends Error{
    constructor(message){
    super(message + ": Id não encontrado")
    this.statusCode  = 404}
}