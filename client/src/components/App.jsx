import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../input.css';
import Navigation from './Navigation/Navigation';
import Overview from './Overview/Overview';
import Talents from './Talents/Talents';
import Constellations from './Constellations/Constellations';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [talents, setTalents] = useState([]);
  const [constellations, setConstellations] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    axios.get('/characters')
      .then((res) => {
        setCharacters(res.data);
        setAllCharacters(res.data);
        setCharacter(res.data[48])
      })
      .catch(err => console.error(err.stack));
  }, []);

  const handleIconClick = (name) => {
    axios.get(`/talents?name=${name}`)
      .then((res) => {
        setTalents(res.data);
      })
      .then(() => {
        axios.get(`/constellations?name=${name}`)
          .then((res) => {
            setConstellations(res.data);
          })
      })
      .catch(err => console.error(err.stack));
  };


  return (
    <div className="container display-flex flex-col space-y-10 bg-cover bg-no-repeat bg-scroll" style={{backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C4E12AQEeBqSNdClRfA/article-cover_image-shrink_720_1280/0/1608487506786?e=2147483647&v=beta&t=iRjdQEx6TPQH6zwLFTGKmAglzFEr8KWhFppdaKuUFC4)`}}>
      <div className="text-5xl text-amber-200 justify-center m-auto w-1/2 text-center p-10">Genshin Impact Dex</div>
      <Navigation characters={characters} setCharacter={setCharacter} setCharacters={setCharacters} allCharacters={allCharacters} handleIconClick={handleIconClick} />
      <Overview character={character} />
      <Talents talents={talents} character={character}/>
      <Constellations constellations={constellations} character={character}/>
    </div>
  );
};

export default App;