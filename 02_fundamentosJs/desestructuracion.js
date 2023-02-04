const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre: () => `${this.nombre} ${this.apellido}`
}

// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder

const imprimeHeroe = ({ nombre, apellido, poder, edad = 0 }) => {
  // const { nombre, apellido, poder, edad = 0 } = heroe
  nombre = 'Fernando'
  console.log(nombre, apellido, poder, edad)
}

// imprimeHeroe(deadpool)

const heroes = ['deadpool', 'Batman', 'Superman']

// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]

const [,,h3]=heroes

console.log(h3)
