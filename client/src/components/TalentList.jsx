import React from 'react';
import TalentIcon from './TalentIcon';

const TalentList = ({talents, character}) => {
  return (
    <div className="overflow-hidden display-flex flex-row">
      <div className="whitespace-nowrap text-amber-200 display-flex space-x-30 justify-center">
        {talents.map((talent, key) => {
          return <TalentIcon talent={talent} key={key} index={key} character={character} />
        })}
      </div>
    </div>
  );
};

export default TalentList;