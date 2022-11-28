import React from 'react';
import TalentList from './TalentList';

const Talents = ({talents, character}) => {
  return (
    <div className="container mx-10">
      <div className="text-amber-200 text-2xl m-10">Talents</div>
      <TalentList talents={talents} character={character}/>
    </div>
  );
};

export default Talents;