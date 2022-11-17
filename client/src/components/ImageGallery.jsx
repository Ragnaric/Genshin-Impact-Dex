import React from 'react';

const ImageGallery = ({character}) => {
  return (
    <>
      { Object.keys(character).length > 0 ? <div className="container z-10 w-full bg-cover bg-no-repeat w-full h-[800px]" style={{backgroundImage: `url(${character.splash_art})`}}>
        <div className="m-auto w-1/2 text-center text-5xl text-amber-200">{character.id}</div>
      </div> : null}
    </>
  );
};

export default ImageGallery;