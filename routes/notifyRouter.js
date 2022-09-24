import { Router } from "express"
import {
  registerUserSubscription, 
} from "../controllers/notificacionesController.js"

 const notifyRouter = Router()
  
 notifyRouter.post("/suscribe", registerUserSubscription)
 

export default notifyRouter