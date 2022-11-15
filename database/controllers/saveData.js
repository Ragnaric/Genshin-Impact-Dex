const { pool } = require('../models/db.js')

const saveData = (charactersData) => {
  for (character of charactersData) {
    pool.query(`INSERT INTO characters (id, rarity, weapon, element, description, region, constellation, birthday, splash_art, front_icon, side_icon) VALUES (${character.id}, ${character.rarity}, ${character.weapon}, ${character.element}, ${character.description}, ${character.region}, ${character.constellation}, ${character.birthday}, ${character.splash_art}, ${character.front_icon}, ${character.side_icon}) ON CONFLICT DO NOTHING`);
  }
};

module.exports.saveData = saveData;