import React from 'react';
import TalentIcon from './TalentIcon';

const TalentList = ({talents, character}) => {
  return (
    <div className="overflow-hidden display-flex flex-row justify-center">
      <div className="whitespace-nowrap transition-transform duration-1000 text-amber-200">
        {talents.map((talent, key) => {
          return <TalentIcon talent={talent} key={key} index={key} character={character} />
        })}
      </div>
    </div>
  );
};

export default TalentList;