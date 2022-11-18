import React, {useState} from 'react';
import ConstellationModal from './ConstellationModal';

const ConstellationIcon = ({constellation, index, character}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container inline-block flex-row flex-wrap inline-block justify-center w-1/6 m-auto h-28 w-64 hover:h-32 hover:w-72 rounded-full border-white border-solid bg-center bg-no-repeat bg-contain duration-500" style={{backgroundImage: `url(${constellation.icon})`}} onClick={() => {
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