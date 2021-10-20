import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateMessageController } from "./controllers/CreateMessageController"
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController"
import { ProfileUserController } from "./controllers/ProfileUserController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"

const router = Router()
router.post("/authenticate", new AuthenticateUserController().handle) //Instanciado o Controller e chamando o handle.Automaticamente o request e response será passados para o handle, por isso não preciso fazer o seguinte: .handle(request, response)
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages/last3", new GetLast3MessagesController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle) //Por ser uma rota controlada, eu devo passar o ensureAuthenticated.

export {router}