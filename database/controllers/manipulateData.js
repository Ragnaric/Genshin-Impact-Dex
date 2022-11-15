//These functions are only ever called to format the data to pass on to other functions

const convertData = (rawData) => {
  let purgedData = [];
  rawData.forEach(item => {
    delete item.id;
    delete item.tier;
    delete item.faction;
    delete item.image;
    delete item.quote;
    delete item.icon;
    delete item.squareCard;
    delete item.title;
    delete item.chineseVA;
    delete item.japaneseVA;
    delete item.englishVA;
    delete item.koreanVA;
    delete item.roles;
    delete item.characterOverview;
    purgedData.push(item);
  })
  return purgedData;
};

const generateTalents = (rawData) => {
  let talentsData = [];
  for (let i = 0; i < rawData.length; i++) {
    let talents = rawData[i].talents;
    for (let j = 0; j < talents.length; j++) {
      let talent = talents[j];
      talent.id = parseInt(talent.id);
      talent.character = rawData[i].name;
      talentsData.push(talent);
    }
  }
  return talentsData;
}

const generateConstellations = (rawData) => {
  let constellationsData = [];
  for (let i = 0; i < rawData.length; i++) {
    let constellations = rawData[i].constellations;
    for (let j = 0; j < constellations.length; j++) {
      let constellation = constellations[j];
      constellation.id = parseInt(constellation.id);
      constellation.character = rawData[i].name;
      constellationsData.push(constellation);
    }
  }
  return constellationsData;
}

module.exports.convertData = convertData;
module.exports.generateTalents = generateTalents;
module.exports.generateConstellations = generateConstellations;