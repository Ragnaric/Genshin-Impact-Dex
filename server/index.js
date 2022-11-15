require('dotenv').config();
const express = require('express');
const app = express();
const { getExternalAPIData } = require('../database/controllers/GenshinAPI.js');
const { generateConstellations, generateTalents } = require('../database/controllers/manipulateData.js');
const { saveData, saveTalents, saveConstellations } = require('../database/controllers/saveData.js');
const { fetchCharacters, findCharacter, findCharacterBy } = require('../database/controllers/fetchData.js');

//This route is only for internal use whenever new data is added to the game since it fetches and saves the data to the database. The user should not be able to interact with it.
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

//Define API routes
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

app.get('/characters/:character', (req, res) => {
  let name = req.params.character;

  findCharacter(name)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch(err => console.error(err.stack));
});


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});