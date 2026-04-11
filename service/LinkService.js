import {LinkRepository} from '../repository/LinkRepository.js'
import { ShortCodeAlreadyExistError } from '../errors/ShortCodeAlreadyExistError.js'
import { ShortCodeNotFound } from '../errors/ShortCodeNotFound.js'

export const LinkService = {

    async createLink(link){
        if(await LinkRepository.verifyShortCode(link.shortCode)){
            throw new ShortCodeAlreadyExistError("Erro ao criar link")
        }
        return await LinkRepository.createLink(link)
    },

    async updateLink(newShortCode,id){
        // se existir, não entra no if
        // se nao existir, entra no if e da erro
        if(!await LinkRepository.verifyId(id)){
            throw new ShortCodeNotFound("Erro ao atualizar ShortCode")
        }
        // se existir, entra no if e da erro
        // se nao existir, nao entra
        if(await LinkRepository.verifyShortCode(newShortCode)){
            throw new ShortCodeAlreadyExistError("Erro ao atualizar ShortCode")
        }
        return await LinkRepository.updateShortCode(newShortCode,id)
    },
    async deleteLink(id){
        return await LinkRepository.deleteLink(id)
    },
    async listLinks(){
        return await LinkRepository.listLinks()
    },
    async accessLink(shortCode){
        return await LinkRepository.accessLink(shortCode)
    }   
    
}