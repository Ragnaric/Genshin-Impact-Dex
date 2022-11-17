import React from 'react';

const ImageGallery = ({image}) => {
  return (
    <div className="container z-10 w-full h-2000 bg-cover bg-no-repeat" style={{backgroundImage: `url(${image.splash_art})`, width: '100%', height: '700px'}}>
      <div className="m-auto w-1/2 text-center text-5xl text-amber-200">{image.id}</div>
    </div>
  );
};

export default ImageGallery;