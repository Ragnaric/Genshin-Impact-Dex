const { pool } = require('../models/db.js')

const saveData = (charactersData) => {
  for (character of charactersData) {
    pool.query(`INSERT INTO characters (id, rarity, weapon, element, description, region, constellation, birthday) VALUES ($$${character.id}$$, $$${character.rarity}$$, $$${character.weapon}$$, $$${character.element}$$, $$${character.description}$$, $$${character.region}$$, $$${character.constellation}$$, $$${character.birthday}$$) ON CONFLICT DO NOTHING`);
  }
};

module.exports.saveData = saveData;