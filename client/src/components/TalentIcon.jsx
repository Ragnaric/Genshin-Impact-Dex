import React, {useState} from 'react';
import TalentModal from './TalentModal';

const TalentIcon = ({talent, index, character}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container inline-block flex-row flex-wrap inline-block justify-center w-1/6 m-auto h-28 w-64 rounded-full border-white border-solid bg-center bg-no-repeat bg-contain duration-1000" style={{backgroundImage: `url(${talent.icon})`}} onClick={() => {
        setShowModal(true);
      }
      }>
        <div className="text-white text-center">{talent.name}</div>
      </div>
      <TalentModal show={showModal} talent={talent} character={character} onClose={() => {
          setShowModal(false);
        }}/>
    </>
  );
};

export default TalentIcon;