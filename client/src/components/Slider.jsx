import React from 'react';
import CharacterList from './CharacterList';

const Slider = () => {
  return (
    <div className="overflow-hidden">
      <div className="whitespace-nowrap transition-transform">Character Slider</div>
      <CharacterList />
    </div>
  );
};

export default Slider;