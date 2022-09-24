import { request, response } from "express";
import webpush from "../webpushConfig.js";

let pushSubscription;

const registerUserSubscription = async (req = request, res = response) => {
  // console.log( 'Body Controller',  req.body)
  pushSubscription = req.body;
  res.status(200).json({
    msg: "Exito!",
  }); 
  // For testing
  // Aquí se puede implementar la lógica de newMessageUser para probar que exista una notificación 
};

const newMessageUser = async (req = request, res = response) => { 

  console.log('Se recibe respuesta en el servidor', req.body.message)

  const { message} = req.body 
  const payload = JSON.stringify({
    title: "Xansiety DEV",
    msg: message,
  }); 
  try { 
    await webpush.sendNotification(pushSubscription, payload);
  } catch (error) {
    console.log({ error });
  }
};

export { registerUserSubscription, newMessageUser };
