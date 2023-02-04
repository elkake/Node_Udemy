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
  const empleado = empleados.find(e => e.id === id)?.nombre

  return empleado ? callback(null, empleado) : callback('Empleado no existe')
}

const getSalario = (id, callback) => {
  const salario = salarios.find(e => e.id === id)?.salario

  return salario ? callback(null, salario) : callback('No tiene salario')
}

getEmpleado(3, (err, empleado) => {
  if (err) {
    console.log('error')
    return console.log(err)
  }

  getSalario(2, (err, salario) => {
    if (err) return console.log('error')
    console.log('el empleado', empleado, 'tiene un salario de:', salario)
  })
})
