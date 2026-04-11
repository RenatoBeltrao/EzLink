

export class ShortCodeAlreadyExistError extends Error{
    constructor(message){
    super(message + ": ShortCode já existe")
    this.statusCode  = 400}
}