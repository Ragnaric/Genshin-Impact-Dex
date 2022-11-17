import React from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';

const Navigation = ({characters, setCharacter, handleIconClick}) => {
  return (
    <div className="container mx-10">
      <div className="text-amber-200 text-2xl m-10">Navigation</div>
      <CharacterList characters={characters} setCharacter={setCharacter} handleIconClick={handleIconClick} />
      <Filter />
    </div>
  );
};

export default Navigation;