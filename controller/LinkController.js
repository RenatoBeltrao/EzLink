import {LinkService} from '../service/LinkService.js'


export const LinkController = {
    
    async createLink(request,reply){
        try{
            const link = request.body
            const result = await LinkService.createLink(link)
            reply.status(201).send(result)
        }catch(e){
            reply.status(400).send(e.message)
        }
    },
    async updateLink(request, reply){
        try{
            const {newShortCode} = request.body
            const id = request.params.id
            const result = await LinkService.updateLink(newShortCode,id)
            reply.status(200).send(result)
        }catch(e){
            reply.status(404).send(e.message)
        }
    },
    async deleteLink(request, reply){
        try{
        const id = request.params.id
        const result = await LinkService.deleteLink(id)
        reply.status(200).send(result)
        }catch(e){
        reply.status(400).send(e.message)
        }
    },
    async listLinks(request, reply){
        try{
            const result = await LinkService.listLinks()
            reply.status(200).send(result)
        }catch(e){
            return reply.status(400).send(e.message)
        }
    },
    async accessLink(request,reply){
        const shortCode = request.params.shortCode
        try{
            const link = await LinkService.accessLink(shortCode)
            reply.status(200).send(link)
        }catch(e){
            reply.status(404).send(e.message)
        }
    }


}