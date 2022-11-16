import React from 'react';

const CharacterCard = ({character, index}) => {
  return (
    <div className="container inline-block w-50 flex-row space-x-5 flex-wrap inline-block justify-center align-center h-100 rounded-full border-white border-solid bg-no-repeat bg-contain" style={{backgroundImage: `url(${character.front_icon.replaceAll('\'', '')})`, width: '100px', height: '100px', transform: `translateX(-${index * 110}%)`}}>
      <div className="text-white text-center">{character.id}</div>
    </div>
  );
};

export default CharacterCard;