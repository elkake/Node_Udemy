// setTimeout(() => {
//   console.log('hola mundo')
// }, 2000)

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: 'Gianfranco'
  }

  setTimeout(() => {
    callback(usuario)
  }, 2000)
}

getUsuarioById(1, ({ nombre, id }) => {
  console.log(`Hola ${nombre.toUpperCase()} eres el id ${id}`)
})
