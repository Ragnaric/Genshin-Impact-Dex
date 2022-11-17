import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../input.css';
import Navigation from './Navigation';
import Overview from './Overview';
import Talents from './Talents';
import Constellations from './Constellations';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    axios.get('/characters')
      .then((res) => {
        setCharacters(res.data);
      })
      .catch(err => console.error(err.stack));
  }, []);

  const handleIconClick = (name) => {
    console.log(name);
    axios.get(`/talents?name=${name}`)
      .then((res) => {
        console.log(res.data);
        setTalents(res.data);
      })
      .catch(err => console.error(err.stack));
  };


  return (
    <div className="container display-flex flex-col space-y-20 bg-cover bg-no-repeat bg-scroll" style={{backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C4E12AQEeBqSNdClRfA/article-cover_image-shrink_720_1280/0/1608487506786?e=2147483647&v=beta&t=iRjdQEx6TPQH6zwLFTGKmAglzFEr8KWhFppdaKuUFC4)`}}>
      <div className="text-5xl text-amber-200 justify-center m-auto w-1/2 text-center p-10">Genshin Impact Dex</div>
      <Navigation characters={characters} setCharacter={setCharacter} handleIconClick={handleIconClick} />
      <Overview character={character} />
      <Talents talents={talents} character={character}/>
      <Constellations />
    </div>
  );
};

export default App;