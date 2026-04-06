import {LinkRepository} from '../repository/LinkRepository.js'

export const LinkService = {

    async createLink(link){

        return await LinkRepository.createLink(link)
    },

    async updateLink(newShortCode,id){
        return await LinkRepository.updateShortCode(newShortCode,id)
    },
    async deleteLink(id){
        return await LinkRepository.deleteLink(id)
    },
    async listLinks(){
        console.log("passei aqui")
        return await LinkRepository.listLinks()
    }
    
}