
// const location = require('../lugar/lugar')

const { KEY_WEATHER_API } = require('../config/config') 

const URL = 'api.openweathermap.org/data/2.5/'
      // API_KEY = 'fb67fc12abc0eab238d389de709d87cb'

const request = `${ URL }weather?lat={lat}&lon={lon}&units=metric&appid=${ KEY_WEATHER_API }` 

