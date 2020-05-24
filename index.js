
const location = require('./lugar/lugar')
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

location.getLugarLatLng(argv.direction)
  .then(res => {
    console.log(res)
  })
  .catch(err => console.error(err))

