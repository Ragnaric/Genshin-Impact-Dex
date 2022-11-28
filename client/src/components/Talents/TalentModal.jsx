import React from 'react';
import TalentInfo from './TalentInfo.jsx';

const TalentModal = ({show, talent, character, onClose}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-x-1/4 inset-y-1/3 justify-center align-center z-10 bg-transparent" onClick={onClose}>
      <div className="w-full m-auto display-flex flex-row flex-wrap bg-red-500 border-solid border-4">
        <div>
          <div className="w-1/2 m-auto p-3 text-center">Talent Info</div>
          <div></div>
        </div>
        <div>
          <h3 className="w-1/2 m-auto p-3 text-center break-normal whitespace-normal">{talent.name}</h3>
          <p className="w-5/6 m-auto p-3 text-center break-normal whitespace-normal">{talent.description}</p>
        </div>
        {/* <table>
          <tbody>
            <TalentInfo talent={talent} character="character" />
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default TalentModal;