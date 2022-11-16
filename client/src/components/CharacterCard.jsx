import React from 'react';

const CharacterCard = ({character}) => {
  return (
    <div className="container inline-block w-50 flex-row space-x-5 flex-wrap inline-block justify-center align-center h-100 rounded-full border-white border-solid bg-no-repeat bg-contain" style={{backgroundImage: `url(${character.front_icon.replaceAll('\'', '')})`, width: '100px', height: '100px'}}>
      <div className="text-white text-center">{character.id}</div>
    </div>
  );
};

export default CharacterCard;

// .product-card {
//   display: inline-block;
//   padding: 1%;
//   margin: 1%;
//   align-items: center;
//   justify-content: center;
//   height: 350px;
//   background-color: var(--primary-page-bg);
//   color: var(--default-white);
//   transition: transform 0.3s;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   border-radius: 10px;
//   filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
// }


//`url(${character.front_icon.replace('\'', '')})`