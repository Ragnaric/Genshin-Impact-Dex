import React, {useState} from 'react';
import TalentModal from './TalentModal';

const TalentIcon = ({talent, index, character}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container inline-block flex-row flex-wrap inline-block justify-center w-1/6 m-auto h-28 w-64 hover:h-32 hover:w-72 rounded-full border-white border-solid bg-center bg-no-repeat bg-contain duration-500" style={{backgroundImage: `url(${talent.icon})`}} onClick={() => {
        setShowModal(true);
      }
      }>
        <div className="text-white text-center overflow-hidden">{talent.name}</div>
      </div>
      <TalentModal show={showModal} talent={talent} character={character} onClose={() => {
          setShowModal(false);
        }}/>
    </>
  );
};

export default TalentIcon;