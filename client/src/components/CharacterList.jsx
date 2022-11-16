import React, {useState, useEffect} from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({characters}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [characters]);

  const updateIndex = (index) => {
    if (index < 0) {
      index = characters.length - 1;
    } else if (index >= characters.length - 12) {
      index = 0;
    }
    console.log('index', index)
    setIndex(index);
  };

  return (
    <div className="overflow-hidden display-flex flex-row">
      <div className="whitespace-nowrap transition-transform text-amber-200">
      {characters.map((character, key) => {
        return <CharacterCard character={character} key={key} index={index}/>
      })}
      </div>
      <div className="display-flex flex-row justify-center w-1/6 m-auto">
        <div className="text-6xl text-white text-center" onClick={() => {
          updateIndex(index - 1);
        }}>
          ‹
        </div>
      </div>
      <div className="display-flex flex-row justify-center w-1/6 m-auto">
        <div className="text-6xl text-white text-center" onClick={() => {
          updateIndex(index + 1);
        }}>
          ›
        </div>
      </div>
    </div>
  );
};

export default CharacterList;