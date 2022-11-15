//This file exists for the sole purpose of getting new character data and saving it to the database. This function, as well as the route that calls it, should be commented out after the database has been updated so the user cannot interact with it.

const axios = require('axios');
const { saveData } = require('./saveData.js');


const saveCharacterData = () => {
  let options = {
    method: 'GET',
    url: 'https://impact.moe/api/characters?expand=talents,constellations'
  }
  return new Promise ((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => console.error(err.stack));
  });
};

module.exports.saveCharacterData = saveCharacterData;