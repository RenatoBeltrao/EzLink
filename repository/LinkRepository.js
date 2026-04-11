import {Link} from '../model/LinkModel.js'

export const LinkRepository = {

    async createLink(link){
        return await Link.create(link);
    },
    async updateShortCode(newShortCode,id){
        const linkAntigo = await Link.findByPk(id)
        await linkAntigo.update({shortCode: newShortCode})
        return linkAntigo
    },
    async verifyId(id){
        const linkAntigo = await Link.findByPk(id)
        return linkAntigo
    },

    async verifyShortCode(shortCode){
        return await Link.findOne({where:  {shortCode} })
    },

    async deleteLink(id){
        const link = await Link.findByPk(id)
        if(!link){
            throw new Error('Link/id não encontrado.')
        }
        const result = await Link.destroy({
            where: { id }
        }) 
        return link
    },
    
    async listLinks(){
        const links = await Link.findAll()
        return links
    },

    async accessLink(shortCode){
        const link = await Link.findOne({ where : { shortCode : shortCode } })
        if(link){
            await link.increment('clicks')
            return link
        }
        throw new Error("Link não encontrado")
    }
    

    
}