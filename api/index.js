const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const {Country} = require('../api/src/db.js')

const URL = 'https://restcountries.com/v2/all';
const port = 3001;

const apiToDbb = async () => {
  console.log('api to db');
  try {
    let response = await axios.get(URL);
    let dataResponse = response.data;
    console.log('llega?');
    dataResponse.map(async (el) => {
      await Country.create({
        id: el.alpha3Code,
        name: el.name,
        flag: el.flag,
        continent: el.region,
        subregion: el.subregion,
        capital: el.capital,
        area: el.area,
        population: el.population,
      })})
    
  } catch (error) {
    error.message
  }

}

// Syncing all the models at once.
conn.sync({ force: true })
  .then(() => {
    //llamada a funcion que crea la DB- fc que trae los datos de la api
    server.listen(port, () => {
      console.log(`Server listening at ${port}`); // eslint-disable-line no-console
    });
    apiToDbb(URL)
  });


