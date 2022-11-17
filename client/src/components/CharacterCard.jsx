import React from 'react';

const CharacterCard = ({character, index, position}) => {
  return (
    <div className="container inline-block w-50 flex-row space-x-5 flex-wrap inline-block justify-center align-center h-100 rounded-full border-white border-solid bg-no-repeat bg-contain duration-1000" style={{backgroundImage: `url(${character.front_icon.replaceAll('\'', '')})`, width: '100px', height: '100px', transform: `translateX(-${position * 600}%)`}} onClick={() => {
      console.log('index', index);
    }}>
      <div className="text-white text-center">{character.id}</div>
    </div>
  );
};

export default CharacterCard;