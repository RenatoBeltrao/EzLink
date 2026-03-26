import {Link} from '../model/LinkModel.js'

export const LinkRepository = {

    async createLink(link){
        return await Link.create(link);
    },
    async updateURL(newURL,id){
        const linkAntigo = await Link.findByPk(id)
        if(!linkAntigo){
        throw new Error('Link não encontrado.')
        }
            await linkAntigo.update(
            {Url: newURL}
        )
        return linkAntigo
    },
    async deleteLink(id){
        const result = await Link.destroy({
            where: { id }
        }) 
    }
    
    
}