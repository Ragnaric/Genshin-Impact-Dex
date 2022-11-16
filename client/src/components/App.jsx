import React from 'react';
import '../input.css';
import Navigation from './Navigation';
import Overview from './Overview';
import Talents from './Talents';
import Constellations from './Constellations';

const App = () => {
  return (
    <div className="display-flex bg-auto bg-center h-screen" style={{backgroundImage: 'url(https://lutris.net/media/games/screenshots/genshin_login.png)'}}>
      <div className="text-3xl text-amber-100">Genshin Impact Dex</div>
      <Navigation />
      <Overview />
      <Talents />
      <Constellations />
    </div>
  );
};

export default App;