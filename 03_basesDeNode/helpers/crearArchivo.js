const fs = require('fs')
const colors = require('colors')
// crear una aplicacion que me cree un archivo con la tabla del numero enviado hasta el 10
const crearArchivo = async (valor, listar = false, h = 0) => {
  let cadena = ''
  let consolCadena = ''
  console.log(valor, listar)

  try {
    for (let i = 1; i <= h; i++) {
      cadena += `${i} x ${valor} = ${i * valor} \n`
      consolCadena += `${colors.yellow(i)} x ${colors.yellow(valor)} = ${
        i * valor
      } \n`
    }

    console.log('============================='.green)
    console.log('     LA TABLA DEL NUMERO'.rainbow, colors.red(valor))
    console.log('============================='.green)


    if (listar) {
      console.log(consolCadena)
    }

    fs.writeFileSync(`./salida/tablaDel${valor}.txt`, cadena)

    return 'Se creo correctamente :D'
  } catch (e) {
    throw ('OCURRIO UN ERROR!', e)
  }
}

module.exports = crearArchivo
