require('dotenv').config();
const express = require('express');
const app = express();
const { getExternalAPIData, getExternalTalents, getExternalConstellations } = require('../database/controllers/GenshinAPI.js');
const { saveData } = require('../database/controllers/saveData.js');

app.get('/update', (req, res) =>{
  getExternalAPIData()
    .then((data) => {
      //saveData(data);
      res.status(200).send(data);
    })
    .catch(err => console.error(err.stack));
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});