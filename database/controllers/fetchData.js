const { pool } = require('../models/db.js');

const fetchCharacters = () => {
  return pool.query(`SELECT * FROM CHARACTERS`);
};

const findCharacter = (name) => {
  return pool.query(`SELECT * FROM CHARACTERS WHERE id = $$${name}$$`);
};

const findCharacterBy = (filters) => {
  let entries = Object.entries(filters);

  let queryString = '';

  for (let i = 0; i < entries.length; i++) {
    let currentEntry = entries[i];
    if (i === 0) {
      queryString += currentEntry[0] + ' = $$' + currentEntry[1] + '$$';
    } else {
      queryString += ' AND ' + currentEntry[0] + ' = $$' + currentEntry[1] + '$$';
    }
  }

  return pool.query(`SELECT * FROM characters WHERE ${queryString}`);
};

const fetchTalents = (name) => {
  return pool.query(`SELECT * FROM talents WHERE character = $$${name}$$`);
};

const fetchConstellations = () => {

};

const fetchWeapons = () => {

};

const fetchArtifacts = () => {

};

module.exports.fetchCharacters = fetchCharacters;
module.exports.findCharacter = findCharacter;
module.exports.findCharacterBy = findCharacterBy;
module.exports.fetchTalents = fetchTalents;
module.exports.fetchConstellations = fetchConstellations;
module.exports.fetchWeapons = fetchWeapons;
module.exports.fetchArtifacts = fetchArtifacts;