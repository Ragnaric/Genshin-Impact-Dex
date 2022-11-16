import React from 'react';
import CharacterList from './CharacterList';

const Navigation = ({characters}) => {
  return (
    <div className="container mx-10">
      <div className='text-amber-200 text-2xl'>Navigation</div>
      <CharacterList characters={characters}/>
    </div>
  );
};

export default Navigation;