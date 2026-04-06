import { LinkController } from "./controller/LinkController.js"

export function appRoutes(server){

    
    server.post('/link/create', LinkController.createLink);
    server.get('/link/access/:shortCode', LinkController.accessLink);
    server.put('/link/update/:id', LinkController.updateLink);
    server.delete('/link/delete/:id', LinkController.deleteLink);
    server.get('/link/list', LinkController.listLinks);
    

}