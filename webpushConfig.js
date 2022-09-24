
import webpush from 'web-push'
import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
  
 webpush.setVapidDetails('mailto:xansietydev@outlook.com', process.env.PUBLIC_VAPID_KEY , process.env.PRIVATE_VAPID_KEY)
 
 export default webpush