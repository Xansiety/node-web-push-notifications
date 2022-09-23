import { Router } from "express"
import {
  usuauriosGET,
  usuariosPOST,
  usuariosPUT,
  usuariosDELETE,
  usuariosPATCH,
} from "../controllers/notificacionesController.js"

 const notifyRouter = Router()

 notifyRouter.get("/", usuauriosGET)

 notifyRouter.put("/:id", usuariosPUT)

 notifyRouter.post("/", usuariosPOST)

 notifyRouter.delete("/:id", usuariosDELETE)

 notifyRouter.patch("/", usuariosPATCH)

export default notifyRouter