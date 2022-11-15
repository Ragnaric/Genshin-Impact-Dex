const { pool } = require('../models/db.js')

const saveData = (charactersData) => {
  for (character of charactersData) {
    pool.query(`INSERT INTO characters (id, rarity, weapon, element, description, region, constellation, birthday) VALUES ($$${character.name}$$, $$${character.rarity}$$, $$${character.weapon}$$, $$${character.element}$$, $$${character.description}$$, $$${character.region}$$, $$${character.constellation}$$, $$${character.birthday}$$) ON CONFLICT DO NOTHING`);
  }
};

const saveTalents = (talentsData) => {
  for (talent of talentsData) {
    pool.query(`INSERT INTO talents (id, name, description, icon, type, character) VALUES ($$${talent.id}$$, $$${talent.name}$$, $$${talent.description}$$, $$${talent.icon}$$, $$${talent.type}$$, $$${talent.character}$$) ON CONFLICT DO NOTHING`);
  }
};

const saveConstellations = (constellationsData) => {
  for (constellation of constellationsData) {
    pool.query(`INSERT INTO constellations (id, name, order, description, icon, character) VALUES ($$${talent.id}$$, $$${talent.name}$$, $$${talent.order}$$, $$${talent.description}$$, $$${talent.icon}$$, $$${talent.character}$$) ON CONFLICT DO NOTHING`);
  }
};

module.exports.saveData = saveData;
module.exports.saveConstellations = saveConstellations;
module.exports.saveTalents = saveTalents;