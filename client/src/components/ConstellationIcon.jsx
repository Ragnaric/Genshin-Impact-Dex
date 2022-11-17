import React from 'react';

const ConstellationIcon = ({constellation, index, character}) => {
  return (
    <div className="container inline-block flex-row flex-wrap inline-block justify-center w-1/6 m-auto rounded-full border-white border-solid bg-center bg-no-repeat bg-contain duration-1000" style={{backgroundImage: `url(${constellation.icon})`, width: '250px', height: '100px'}}>
      <div className="text-white text-center">{constellation.name}</div>
    </div>
  );
};

export default ConstellationIcon;