import React from 'react';

const CharacterIcon = ({character, index, position, setCharacter, handleIconClick}) => {

  return (
    <div className="container inline-block flex-row space-x-5 flex-wrap inline-block justify-center h-28 w-28 rounded-full border-white border-solid bg-no-repeat bg-contain duration-500 hover:h-36 hover:w-36" style={{backgroundImage: `url(${character.front_icon.replaceAll('\'', '')})`, transform: `translateX(-${position * 600}%)`}} onClick={() => {
      setCharacter(character);
      handleIconClick(character.id);
      window.scrollTo({top: 800, behavior: 'smooth'});
    }}>
      <div className="text-white text-center">{character.id}</div>
    </div>
  );
};

export default CharacterIcon;