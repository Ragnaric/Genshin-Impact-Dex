const { rawData } = require('../models/data.js');

const convertData = () => {
  rawData.forEach(item => {
    delete item.name;
    delete item.tier;
    delete item.faction;
    delete item.quote;
    delete item.title;
    delete item.chineseVA;
    delete item.japaneseVA;
    delete item.englishVA;
    delete item.koreanVA;
    delete item.image;
    delete item.squareCard;
    delete item.icon;
    delete item.roles;
    delete item.characterOverview;
    delete item.talents;
    delete item.constellations;
  })

  const columnKeys = Object.keys(rawData[0]);

  const refinedData = [];

  refinedData.push(columnKeys);

  rawData.forEach(row => {
    refinedData.push(Object.values(row));
  });

  let csvContent = '';

  refinedData.forEach(row => {
    csvContent += row.join(',') + '\n';
  });

  return csvContent;
};

// const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
// const objURL = URL.createObjectURL(blob);

// const link = document.createElement('a');
// link.setAttribute('href', objUrl);
// link.setAttribute('download', 'File.csv');
// link.textContent = 'Click to Download';

// document.querySelector('body').append(link);

module.exports.convertData = convertData;