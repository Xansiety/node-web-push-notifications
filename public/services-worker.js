console.log('Instancia de services worker')


// self indica al mismo propio archivo
// agregamos un listener para escuchar el evento push
self.addEventListener('push', e => {
   const data =  e.data.json()
   console.log('Notificación recibida', data)
})