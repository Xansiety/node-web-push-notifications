import { Router } from "express"
import {
  registerUserSubscription, 
  newMessageUser
} from "../controllers/notificacionesController.js"

 const notifyRouter = Router()
  
 notifyRouter.post("/suscribe", registerUserSubscription)
 notifyRouter.post("/newMessage", newMessageUser)
 

export default notifyRouter