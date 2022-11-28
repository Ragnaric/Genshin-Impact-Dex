import React from 'react';
import ConstellationInfo from './ConstellationInfo.jsx';

const ConstellationModal = ({show, constellation, character, onClose}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-1/3 justify-center align-center z-10 bg-transparent" onClick={onClose}>
      <div className="w-[600px] m-auto h-fit display-flex flex-row flex-wrap bg-red-500 border-solid border-4">
        <div>
          <div className="w-1/2 m-auto p-3 text-center">Constellation Info</div>
          <div></div>
        </div>
        <div>
          <h3 className="w-1/2 m-auto p-3 text-center break-normal whitespace-normal">{constellation.name}</h3>
          <h3 className="w-5/6 m-auto p-3 text-center break-normal whitespace-normal">{constellation.description}</h3>
        </div>
        {/* <table>
          <tbody>
            <ConstellationInfo constellation={constellation} character="character" />
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default ConstellationModal;