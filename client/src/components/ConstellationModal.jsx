import React from 'react';
import ConstellationInfo from './ConstellationInfo.jsx';

const ConstellationModal = ({show, constellation, character}) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <div>
        <div>
          <div>Constellation Info</div>
          <div></div>
        </div>
        <div>
          <h3>Name</h3>
          <h3>Description</h3>
        </div>
        <table>
          <tbody>
            <ConstellationInfo constellation={constellation} character="character" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConstellationModal;