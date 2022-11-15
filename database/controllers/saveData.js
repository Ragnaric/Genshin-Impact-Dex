const { pool } = require('../models/db.js')

const saveData = (charactersData) => {
  for (character of charactersData) {
    pool.query(`INSERT INTO characters (id, rarity, weapon, element, description, region, constellation, birthday) VALUES ($$${character.name}$$, $$${character.rarity}$$, $$${character.weapon}$$, $$${character.element}$$, $$${character.description}$$, $$${character.region}$$, $$${character.constellation}$$, $$${character.birthday}$$) ON CONFLICT DO NOTHING`);
  }
};

const saveTalents = (charactersData) => {
  let talentsData = [];
  for (let i = 0; i < charactersData.length; i++) {
    let talents = charactersData[i];
    for (let j = 0; j < talents.length; j++) {
      let talent = talents[j];
      talent.character = charactersData[i].name;
      talentsData.push(talent);
    }
  }


  for (talent of talentsData) {
    pool.query(`INSERT INTO talents (id, name, description, icon, type, character) VALUES ($$${talent.id}$$, $$${talent.name}$$, $$${talent.description}$$, $$${talent.icon}$$, $$${talent.type}$$, $$${talent.character}$$) ON CONFLICT DO NOTHING`);
  }
};

const updateData = () => {

};

module.exports.saveData = saveData;
module.exports.updateData = updateData;