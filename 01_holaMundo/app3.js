// todo es sincrono

// se ejecuta primero
console.log('Inicio de programa')

// se ejecuta quinto
setTimeout(() => {
  console.log('primer timeOut')
}, 3000)

// se ejecuta tercero
setTimeout(() => {
  console.log('Segundo timeOut')
}, 0)

// se ejecuta cuarto
setTimeout(() => {
  console.log('Tercer timeOut')
}, 0)

// se ejecuta segundo
console.log('fin del programa')
