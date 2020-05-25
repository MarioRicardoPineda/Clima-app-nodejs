if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

module.exports = {
  KEY_GOOGLE_MAPS : process.env.KEY_GOOGLE_MAPS,
  KEY_WEATHER_API : process.env.KEY_WEATHER_API
}