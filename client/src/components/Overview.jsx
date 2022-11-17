import React from 'react';
import ImageGallery from './ImageGallery';

const Overview = ({image}) => {
  return (
    <div className="container mx-10">
      <div className='text-amber-200 text-2xl m-10'>Overview</div>
      <ImageGallery image={image} />
    </div>
  );
};

export default Overview;