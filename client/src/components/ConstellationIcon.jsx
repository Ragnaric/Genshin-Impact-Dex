import React, {useState} from 'react';
import ConstellationModal from './ConstellationModal';

const ConstellationIcon = ({constellation, index, character}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container inline-block flex-row flex-wrap inline-block justify-center w-1/6 m-auto rounded-full border-white border-solid bg-center bg-no-repeat bg-contain duration-1000" style={{backgroundImage: `url(${constellation.icon})`, width: '250px', height: '100px'}} onClick={() => {
        setShowModal(true);
      }}>
        <div className="text-white text-center">{constellation.name}</div>
      </div>
      <ConstellationModal show={showModal} constellation={constellation} character={character} onClose={() => {
          setShowModal(false);
        }}/>
    </>
  );
};

export default ConstellationIcon;