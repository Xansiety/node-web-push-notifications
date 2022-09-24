const PUBLIC_VAPID_KEY =
  "BIKFgzuaFd3sICAugbbjV_FnYO50AkZX2exS5oCC2tu2qehFYFsSCNMqTCPQhc9FOjsEVPZ-3BlTIkEiDp6aqEM";
const refForm = document.querySelector("#myForm");
const message = document.querySelector("#msg");

// Enviar la petición
const subscribeUser = async () => {
  //Registrar nuestro servicio de worker
  const register = await navigator.serviceWorker.register(
    "/services-worker.js",
    {
      scope: "/",
    }
  );
  console.log("New Services worker");

  // TODO: Ver consola del navegador en la pestaña aplicación para observar el services worker

  // Suscribir al usuario
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: PUBLIC_VAPID_KEY,
  });

  await fetch("http://localhost:8080/suscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("suscrito");
};

refForm.addEventListener("submit", (e) => {
  e.preventDefault(); // bloquear el comportamiento natural del formulario

  fetch("/newMessage", {
    method: "POST",
    body: JSON.stringify({ message: message.value }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  refForm.reset()

});

subscribeUser();
