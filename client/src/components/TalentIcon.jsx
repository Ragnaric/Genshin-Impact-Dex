import React from 'react';

const TalentIcon = ({talent, index, character}) => {
  return (
    <div className="container inline-block flex-row space-x-5 flex-wrap inline-block justify-center align-center h-100 rounded-full border-white border-solid bg-no-repeat bg-contain duration-1000" style={{backgroundImage: `url(${talent.icon})`, width: '100px', height: '100px'}}>
      <div>{talent.name}</div>
    </div>
  );
};

export default TalentIcon;