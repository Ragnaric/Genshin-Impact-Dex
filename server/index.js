require('dotenv').config();
const express = require('express');
const app = express();
const { saveCharacterData } = require('../database/controllers/GenshinAPI.js');

app.get('/update', (req, res) =>{
  saveCharacterData()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => console.error(err.stack));
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});