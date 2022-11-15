import React from 'react';
import '../input.css';
const {convertData} = require('../../../database/controllers/convertData');
const {rawData} = require('../../../database/models/data.js');

console.log(convertData());
console.log(rawData[0]);

const App = () => {
  return (
    <div>
      <div>App</div>
    </div>
  );
};

export default App;