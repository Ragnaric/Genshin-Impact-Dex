require('dotenv').config();
const path = require('path');
const URL = process.env.URL;
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const { getExternalAPIData } = require('../database/controllers/GenshinAPI.js');
const { generateConstellations, generateTalents } = require('../database/controllers/manipulateData.js');
const { saveData, saveTalents, saveConstellations, updateImages } = require('../database/controllers/saveData.js');
const { fetchCharacters, findCharacter, findCharacterBy, fetchTalents, fetchConstellations } = require('../database/controllers/fetchData.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

//The following routes are only for internal use whenever new data is added to the game since they fetch and save the data to the database. The user should not be able to interact with them.
app.get('/update', (req, res) => {
  getExternalAPIData()
    .then((data) => {
      let talentsData = generateTalents(data);
      let constellationsData = generateConstellations(data);
      saveData(data);
      saveTalents(talentsData);
      saveConstellations(constellationsData);
      res.status(200).send(constellationsData);
    })
    .catch(err => console.error(err.stack));
})

app.put('/update/images', (req, res) => {
  getExternalAPIData()
    .then((data) => {
      updateImages(data)
      res.status(204)
      res.end();
    })
    .catch(err => console.error(err.stack));
})

//Define API routes
//Route to be used on initial render of page
app.get('/characters', (req, res) => {
  let rarity = req.query.rarity;
  let weapon = req.query.weapon;
  let element = req.query.element;
  let region = req.query.region;

  if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
    fetchCharacters()
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch(err => console.error(err.stack));
  } else {
    let filters = req.query;
    findCharacterBy(filters)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch(err => console.error(err.stack));
  }
});

//Route to be used for the search bar
app.get('/characters/:character', (req, res) => {
  let name = req.params.character;

  findCharacter(name)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch(err => console.error(err.stack));
});

app.get('/talents', (req, res) => {
  let name = req.query.name;
  console.log(name);
  fetchTalents(name)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch(err => console.error(err.stack));
});

app.get('/constellations', (req, res) => {
  let name = req.query.name;
  console.log(name);
  fetchConstellations(name)
    .then((data) => {
      console.log('constellations', data.rows)
      res.status(200).send(data.rows);
    })
    .catch(err => console.error(err.stack));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});