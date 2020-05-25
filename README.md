# Clima App con NodeJs

### App de consola, hecha con nodejs

* La aplicación se conecta con dos API's, la primera es:
  * API de Google maps - [Geocoding](https://developers.google.com/maps/documentation/geocoding/start) *(Para obtener las coordenadas)*
  * API de [OpenWeather](https://openweathermap.org/), *(Para obtener el clima)*

Para poder usar esta app ejecute *```npm install```* para descargar todas las dependencias necesarias para este proyecto.

**NOTA IMPORTANTE!**

Los servicios utilizados requiren de una API_KEY, la cual es privada, y de esa forma usar sus servicios.
Por tanto es necesario que configure las variables de entorno.

### Pasos para crear sus variables de entorno

1. Cree un archivo ```.env``` en la raíz del proyecto
2. Cree dos constantes ```KEY_GOOGLE_MAPS``` Y ```KEY_WEATHER_API```
3. Agrega tu API_KEY corerspondiente como un string Ej: ```KEY_WEATHER_API='frsd23112377dsjsd882jks123'```

Una vez tiene esto configurado, con sus propias API_KEY, ya puede usar la aplicación.

Solicita la temperatura de tu ciudad escribiendo este comando:

```node index --direction "Madrid"```

Y te dará la temperatura actual de tu ciudad. Eso es todo por esta primera versión.