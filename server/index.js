require('dotenv').config();
const express = require('express');
const app = express();

app.get('/character', (req, res) =>{
  console.log('Server get request', req.body);
  res.status(200).send('This is the data');
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});