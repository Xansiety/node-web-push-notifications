import { request, response } from "express";
import webpush from "../webpushConfig.js";

let pushSubscription;

const registerUserSubscription = async (req = request, res = response) => {
  // console.log( 'Body Controller',  req.body)
  pushSubscription = req.body;

  res.status(200).json({
    msg: "Exito!",
  });

  const payload = JSON.stringify({
    title: "My custom notification",
    msg: "Hello World",
  });

  try { 
    console.log('Se envia notificacion');
    await webpush.sendNotification(pushSubscription, payload);
  } catch (error) {
    console.log({error});
  }
 

};

export { registerUserSubscription };
