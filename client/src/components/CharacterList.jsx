import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({characters}) => {
  return (
    <div className="overflow-hidden">
      <div className="whitespace-nowrap transition-transform text-amber-200">
      {characters.map((character, index) => {
        return <CharacterCard character={character} key={index}/>
      })}
      </div>
    </div>
  );
};

export default CharacterList;