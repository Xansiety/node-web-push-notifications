console.log("Instancia de services worker");


// Referencias: https://developers.google.com/drive/api/guides/push


// self indica al mismo propio archivo
// agregamos un listener para escuchar el evento push
self.addEventListener("push", (event) => {
  const data = event.data.json();
  //    console.log('Notificación recibida', data)
  //   self.registration.ShowNotification(data.title, {
  //     body:  data.msg ,
  //     icon: 'https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png'
  //   })

  console.log("Received a push message", event);

  var title = data.title;
  var body = data.msg;
  var icon = "https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png";
  var tag = "simple-push-demo-notification-tag";
  var dataBody = {
    doge: {
      wow: "such amaze notification data",
    },
  };

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag,
      data: dataBody,
    })
  );
});
