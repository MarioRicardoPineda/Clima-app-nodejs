const axios = require('axios')

const { KEY_WEATHER_API } = require('../config/config') 


const URL = 'https://api.openweathermap.org/data/2.5/'

const getTemp = async (lat, lng) => {

  let res = await axios.get(`${ URL }weather?lat=${lat}&lon=${lng}&units=metric&appid=${ KEY_WEATHER_API }`)

  return res.data.main.temp

}

module.exports = {
  getTemp
}

