import React from 'react';
import ConstellationList from './ConstellationList';

const Constellations = ({constellations, character}) => {
  return (
    <div className="container mx-10">
      <div className="text-amber-200 text-2xl m-10">Constellations</div>
      <ConstellationList constellations={constellations} character={character}/>
    </div>
  );
};

export default Constellations;