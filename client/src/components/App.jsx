import React from 'react';
import '../input.css';
import Navigation from './Navigation';
import Overview from './Overview';
import Talents from './Talents';
import Constellations from './Constellations';

const App = () => {
  return (
    <div className="container display-flex flex-col space-y-20 bg-cover bg-center h-screen" style={{backgroundImage: 'url(https://media-exp1.licdn.com/dms/image/C4E12AQEeBqSNdClRfA/article-cover_image-shrink_720_1280/0/1608487506786?e=2147483647&v=beta&t=iRjdQEx6TPQH6zwLFTGKmAglzFEr8KWhFppdaKuUFC4)'}}>
      <div className="text-5xl text-amber-200 justify-center m-auto w-1/2 text-center p-10">Genshin Impact Dex</div>
      <Navigation />
      <Overview />
      <Talents />
      <Constellations />
    </div>
  );
};

export default App;