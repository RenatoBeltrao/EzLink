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
            const {id,link} = request.body
            const result = await LinkService.updateLink(id,link)
        }catch(e){
            reply.status(400).send(e.message)
        }
    },
    async deleteLink(id){
        return await LinkRepository.deleteLink(id)
    },
    async listLinks(){
        return await LinkRepository.listLinks()
    }


}