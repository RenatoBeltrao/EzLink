import {LinkRepository} from '../repository/LinkRepository.js'

export const LinkService = {

    async createLink(link){
        return await LinkRepository.createLink(link)
    },

    async updateLink(link,id){
        return await LinkRepository.updateLink(link,id)
    },
    async deleteLink(id){
        return await LinkRepository.deleteLink(id)
    },
    async listLinks(){
        return await LinkRepository.listLinks()
    }
    
}