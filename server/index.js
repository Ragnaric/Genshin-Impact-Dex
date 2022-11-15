require('dotenv').config();
const express = require('express');
const app = express();
const { getCharacterData } = require('./GenshinAPI.js');

app.get('/characters', (req, res) =>{
  getCharacterData()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => console.error(err.stack));
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});