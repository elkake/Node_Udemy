const empleados = [
  {
    id: 1,
    nombre: 'Pepe'
  },
  {
    id: 2,
    nombre: 'Krea'
  },
  {
    id: 3,
    nombre: 'Tomas'
  }
]

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
]

const getEmpleado = (id, callback) => {
  const promesa = new Promise((res, rej) => {
    const empleado = empleados.find(e => e.id === id)?.nombre

    empleado ? res(empleado) : rej('no existe el empleado con ese id')
  })
  return promesa
}

const getSalario = (id, callback) => {
  const promesa = new Promise((res, rej) => {
    const salario = salarios.find(e => e.id === id)?.salario

    salario ? res(salario) : rej('no existe salario con ese id')
  })
  return promesa
}

// getEmpleado(1)
//   .then(e => console.log(e))
//   .catch(e => console.log(e))

// getSalario(2)
//   .then(e => console.log(e))
//   .catch(e => console.log(e))

// callback hell
let nombre
const id=10

getEmpleado(id)
  .then(empleado => {
    nombre = empleado
    return getSalario(id)
  })
  .then(salario =>
    console.log('el empleado', nombre, 'tiene el salario de', salario)
  )
  .catch(e => console.log(e))
