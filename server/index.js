require('dotenv').config();
const express = require('express');
const app = express();
const { getExternalAPIData, getExternalTalents, getExternalConstellations } = require('../database/controllers/GenshinAPI.js');
const { generateConstellations, generateTalents } = require('../database/controllers/manipulateData.js');
const { saveData, saveTalents, saveConstellations } = require('../database/controllers/saveData.js');

app.get('/update', (req, res) =>{
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

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});