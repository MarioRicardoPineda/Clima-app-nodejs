
const axios = require('axios')

const API_KEY = 'AIzaSyATpkO7CSRi1w_BwHEVBpJ4UNr0S-BR3Fs'
const URL = 'https://maps.googleapis.com/maps/api/geocode/json'

const getLugarLatLng = async direction => {
  
  let encodeURL = encodeURI( direction )
  let res = await axios.get(`${ URL }?address=${ encodeURL }&key=${ API_KEY }`)

  if (res.data.status === 'ZERO_RESULTS') {
    throw new Error(`No hay Resultado para la ciudad ${ direction }`)
  }

  let location = res.data.results[0]
  let coors = location.geometry.location

  return {
    direction: location.formatted_address,
    lat: coors.lat,
    lng: coors.lng
  }

}

module.exports = {
  getLugarLatLng
}
