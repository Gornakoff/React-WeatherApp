let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const UNITS = 'metric';
const APPID = '4578c5066d9ccd63cc02e4c0e4c2e260'

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}` +
                      'q=' + `${encodedLocation}` +
                      '&units=' + `${UNITS}` +
                      '&appid=' + `${APPID}`;

    return axios.get(requestUrl)
        .then(function(res) {
          console.log(res);
          if (res.data.name.toLowerCase() !== location.toLowerCase()) {
            alert('Location not found!');
          } else {
            return res.data.main.temp;
          }
        })
        .catch(function(err) {
          console.log(err);
          throw new Error(err.message);
        })
  }
}
