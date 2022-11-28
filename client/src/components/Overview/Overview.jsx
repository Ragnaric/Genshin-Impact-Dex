import React from 'react';
import ImageGallery from './ImageGallery';

const Overview = ({character}) => {
  return (
    <div className="container mx-10">
      <div className="text-amber-200 text-2xl m-10">Overview</div>
      <ImageGallery character={character} />
    </div>
  );
};

export default Overview;