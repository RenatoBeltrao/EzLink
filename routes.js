import { LinkController } from "./controller/LinkController.js"

export function appRoutes(server){

    server.post('/create', LinkController.createLink);

}