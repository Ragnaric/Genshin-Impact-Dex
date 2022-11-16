//This file exists for the sole purpose of saving new data from the game to the database. The user should not be able to interact with these functions.

const { pool } = require('../models/db.js');

const saveData = (charactersData) => {
  for (character of charactersData) {
    pool.query(`INSERT INTO characters (id, rarity, weapon, element, description, region, constellation, birthday) VALUES ($$${character.name}$$, $$${character.rarity}$$, $$${character.weapon}$$, $$${character.element}$$, $$${character.description}$$, $$${character.region}$$, $$${character.constellation}$$, $$${character.birthday}$$) ON CONFLICT DO NOTHING`);
  }
};

const saveTalents = (talentsData) => {
  for (talent of talentsData) {
    pool.query(`INSERT INTO talents (id, name, description, icon, type, character) VALUES ($$${talent.id}$$, $$${talent.name}$$, $$${talent.description}$$, $$${talent.image}$$, $$${talent.type}$$, $$${talent.character}$$) ON CONFLICT DO NOTHING`);
  }
};

const saveConstellations = (constellationsData) => {
  for (constellation of constellationsData) {
    pool.query(`INSERT INTO constellations (id, name, "order", description, icon, character) VALUES ($$${constellation.id}$$, $$${constellation.name}$$, $$${constellation.order}$$, $$${constellation.description}$$, $$${constellation.image}$$, $$${constellation.character}$$) ON CONFLICT DO NOTHING`);
  }
};

const updateImages = (charactersData) => {
  for (character of charactersData) {
    pool.query(`UPDATE characters SET splash_art = $$'https://enka.network/ui/UI_Gacha_AvatarImg_${character.name}.png'$$, front_icon = $$'https://enka.network/ui/UI_AvatarIcon_${character.name}.png'$$, side_icon = $$'https://enka.network/ui/UI_AvatarIcon_Side_${character.name}.png'$$ WHERE id = $$${character.name}$$`);
  }
};

module.exports.saveData = saveData;
module.exports.saveConstellations = saveConstellations;
module.exports.saveTalents = saveTalents;
module.exports.updateImages = updateImages;