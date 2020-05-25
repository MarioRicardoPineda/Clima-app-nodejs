
const location = require('./lugar/lugar'),
      clima = require('./clima/clima')

const argv = require('yargs')
  .options({
    direction: {
      demand: true,
      alias: 'd',
      desc: 'Dirección de la ciudad, para obtener el clima'
    }
  })
  .help()
  .argv

const getClima = async direction => {

  try {
    let coors = await location.getLugarLatLng(direction)
    let temp = await clima.getTemp( coors.lat, coors.lng )

    return `El clima en ${ coors.direction } es de ${ temp }°C`

  } catch (error) {
    return `No se puede determinar el clima en: ${ direction }`
  }

}

getClima( argv.direction )
  .then( msg => console.log( msg ) )
  .catch( err => console.log( err ) )

