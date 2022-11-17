import React from 'react';

const TalentIcon = ({talent, index, character}) => {
  return (
    <div className="container inline-block flex-row flex-wrap inline-block justify-center w-1/6 m-auto rounded-full border-white border-solid bg-center bg-no-repeat bg-contain duration-1000" style={{backgroundImage: `url(${talent.icon})`, width: '250px', height: '100px'}}>
      <div className="text-white text-center">{talent.name}</div>
    </div>
  );
};

export default TalentIcon;