const axios = require('axios');

const getCharacterData = () => {
  let options = {
    method: 'GET',
    url: 'https://impact.moe/api/characters?expand=talents,constellations'
  }
  return new Promise ((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data[0]);
      })
      .catch(err => console.error(err.stack));
  });
};

module.exports.getCharacterData = getCharacterData;