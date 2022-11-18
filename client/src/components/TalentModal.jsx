import React from 'react';
import TalentInfo from './TalentInfo.jsx';

const TalentModal = ({show, talent, character}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-2/4 justify-center align-center z-10 bg-transparent bg-black-500">
      <div className="w-[500px] h-fit display-flex flex-row flex-wrap rounded-full bg-red-500">
        <div>
          <div>Talent Info</div>
          <div></div>
        </div>
        <div>
          <h3>Name</h3>
          <h3>Description</h3>
        </div>
        <table>
          <tbody>
            <TalentInfo talent={talent} character="character" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TalentModal;