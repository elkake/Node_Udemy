const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      demandOption: true,
      type: 'number',
      describe: 'base de la multiplicacion'
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      describe: 'listar en consola',
      demandOption: true,
      default: false
    },
    h: {
      alias: 'hasta',
      demandOption: true,
      type: 'number',
      describe: 'cantidad por multiplicar'
    },
  })
  .check(argv => {
    if (isNaN(argv.base) || isNaN(argv.h)) {
      throw new Error('Solo se aceptan numero enteros')
    } else {
      return true
    }
  }).argv


  module.exports=argv
  