import React from 'react';
import TalentList from './TalentList';

const Talents = ({talents, handleIconClick, character}) => {
  return (
    <div className="container mx-10">
      <div className='text-amber-200 text-2xl'>Talents</div>
      <TalentList talents={talents} handleIconClick={handleIconClick} character={character}/>
    </div>
  );
};

export default Talents;