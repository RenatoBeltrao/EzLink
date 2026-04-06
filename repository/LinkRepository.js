import {Link} from '../model/LinkModel.js'

export const LinkRepository = {

    async createLink(link){
        return await Link.create(link);
    },
    async updateShortCode(newShortCode,id){
        const linkAntigo = await Link.findByPk(id)
        if(!linkAntigo){
        throw new Error('Link/id não encontrado.')
        }
            await linkAntigo.update(
            {shortCode: newShortCode}
        )
        return linkAntigo
    },

    async deleteLink(id){
        const link = await Link.findByPk(id)
        if(!link){
            throw new Error('Link/id não encontrado.')
        }
        const result = await Link.destroy({
            where: { id }
        }) 
    },
    
    async listLinks(){
        const links = await Link.findAll()
        return links
    }
    

    
}