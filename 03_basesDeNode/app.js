const crearArchivo = require('./helpers/crearArchivo.js')
const colors=require('colors')

const argv = require('./config/yargs.js')

console.log(colors.blue(argv))

crearArchivo(argv.b, argv.l,argv.h)
  .then(e => console.log(e.rainbow))
  .catch(e => console.log(e))
