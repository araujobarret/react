const axios = require('axios');

const API_KEY = 'd241eac0ecd3e0efab18a707816bd926';
const URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + API_KEY + '&q=';

let getTemp = (location) => {
  let encodedLocation = encodeURIComponent(location);
  let url = URL + encodedLocation;

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((res) => {
        if(res.data.cod && res.data.message)
          reject(res);
        else
          resolve(res.data.main.temp);
    }).catch((e) => reject(e));
  });
};

module.exports = {
  getTemp
};
