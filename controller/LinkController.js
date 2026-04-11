import {LinkService} from '../service/LinkService.js'


export const LinkController = {
    
    async createLink(request,reply){
            const link = request.body
            const result = await LinkService.createLink(link)
            reply.status(201).send({
                result: {shortCode:result.shortCode,link:result.url},
                message: "Encurtador criado com sucesso",
                statusCode: 201
            })

    },
    async updateLink(request, reply){
        
            const {newShortCode} = request.body
            const id = request.params.id
            const result = await LinkService.updateLink(newShortCode,id)
            reply.status(200).send({
                result: {newShortCode: result.shortCode},
                message: "shortCode atualizado com sucesso",
                statusCode: 200
            })
        
    },
    async deleteLink(request, reply){

        const id = request.params.id
        const link = await LinkService.deleteLink(id)
        reply.status(200).send({
                result: {deletedShortCode: link.dataValues.shortCode, deletedId: link.dataValues.url},
                message: "Encurtador apagado com sucesso",
                statusCode: 200
            })

    },
    async listLinks(request, reply){
        const result = await LinkService.listLinks()
        reply.status(200).send({
                result: {Links: result},
                message: "Lista de encurtadores ",
                statusCode: 200
            })
    },

    async accessLink(request,reply){
        const shortCode = request.params.shortCode
        const link = await LinkService.accessLink(shortCode)
        reply.status(200).send({
                result: {newShortCode: link.url},
                message: "Encurtador encontrado com sucesso",
                statusCode: 200
            })
    }


}