import React from 'react';
import ConstellationIcon from './ConstellationIcon';

const ConstellationList = ({constellations, character}) => {
  return (
    <div className="overflow-hidden display-flex flex-row">
      <div className="whitespace-nowrap text-amber-200 display-flex space-x-30 justify-center mb-10">
        {constellations.map((constellation, key) => {
          return <ConstellationIcon constellation={constellation} key={key} index={key} character={character} />
        })}
      </div>
    </div>
  );
};

export default ConstellationList;