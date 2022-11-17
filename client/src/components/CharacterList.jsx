import React, {useState, useEffect} from 'react';
import CharacterIcon from './CharacterIcon';

const CharacterList = ({characters, setCharacter, handleIconClick}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [characters]);

  const updateIndex = (index) => {
    if (index < 0) {
      index = characters.length - 46;
    } else if (index > characters.length - 46) {
      index = 0;
    }
    setIndex(index);
  };

  return (
    <div className="overflow-hidden display-flex flex-row justify-center">
      <div className="whitespace-nowrap transition-transform duration-1000 text-amber-200">
      {characters.map((character, key) => {
        return <CharacterIcon character={character} key={key} index={key} position={index} setCharacter={setCharacter} handleIconClick={handleIconClick} />
      })}
      </div>
      <div className="inline-block w-1/2">
        <div className="text-6xl text-white text-center" onClick={() => {
          updateIndex(index - 1);
        }}>
          ‹
        </div>
      </div>
      <div className="inline-block w-1/2">
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