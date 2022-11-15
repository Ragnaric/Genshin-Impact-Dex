//This file exists for the sole purpose of getting new data from the game and sending it in a new format to the server so that it can then be saved in the database. These functions, as well as the route that calls them, should be commented out after the database has been updated so the user cannot interact with them.

const axios = require('axios');
const {convertData, generateTalents, generateConstellations} = require('./manipulateData.js');

const getExternalAPIData = () => {
  let options = {
    method: 'GET',
    url: 'https://impact.moe/api/characters?expand=talents,constellations'
  }
  return new Promise ((resolve, reject) => {
    axios(options)
      .then(res => {
        const alteredData = convertData(res.data);
        resolve(alteredData);
      })
      .catch(err => console.error(err.stack));
  });
};

const getExternalTalents = () => {

};

const getExternalConstellations = () => {

};

module.exports.getExternalAPIData = getExternalAPIData;
module.exports.getExternalTalents = getExternalTalents;
module.exports.getExternalConstellations = getExternalConstellations;