
const { KEY_WEATHER_API } = require('../config/config') 

const URL = 'api.openweathermap.org/data/2.5/'

const request = `${ URL }weather?lat={lat}&lon={lon}&units=metric&appid=${ KEY_WEATHER_API }` 

