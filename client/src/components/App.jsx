import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../input.css';
import Navigation from './Navigation';
import Overview from './Overview';
import Talents from './Talents';
import Constellations from './Constellations';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [image, setImage] = useState({});

  useEffect(() => {
    axios.get('/characters')
      .then((res) => {
        setCharacters(res.data);
        setImage(res.data[0]);
      })
      .catch(err => console.error(err.stack));
  }, []);

  return (
    <div className="container display-flex flex-col space-y-20 h-full bg-no-repeat bg-contain bg-scroll" style={{backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C4E12AQEeBqSNdClRfA/article-cover_image-shrink_720_1280/0/1608487506786?e=2147483647&v=beta&t=iRjdQEx6TPQH6zwLFTGKmAglzFEr8KWhFppdaKuUFC4)`}}>
      <div className="text-5xl text-amber-200 justify-center m-auto w-1/2 text-center p-10">Genshin Impact Dex</div>
      <Navigation characters={characters} setImage={setImage} />
      <Overview image={image} />
      <Talents />
      <Constellations />
    </div>
  );
};

export default App;