import React from 'react';
import TalentInfo from './TalentInfo.jsx';

const TalentModal = ({show, talent, character}) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <div>
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