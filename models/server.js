import express from "express"
import cors from "cors"
import notifyRouter from "../routes/notifyRouter.js"
import morgan from "morgan"
class Server {
  constructor() {
    this.app = express() //creamos la aplicación de express
    this.port = process.env.PORT
    this.notifyPath = "/"

    // Middleware
    this.Middleware()

    //Rutas de mi aplicación
    this.routes()
  }

  Middleware() {
    //CORS
    this.app.use(cors())

    // Morgan para escuchar los eventos del cliente
    this.app.use(morgan('dev'))

    // Entender los datos de un formulario
    this.app.use(express.urlencoded({extended: false}))

    // parseo y lectura del body
    this.app.use(express.json())
 
     
    // Servir contenido estático
    this.app.use(express.static('public'))  
 
  }

  routes() {
    //rutas separadas
    this.app.use(this.notifyPath, notifyRouter)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server