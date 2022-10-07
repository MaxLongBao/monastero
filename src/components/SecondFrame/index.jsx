import React from 'react';
import musician from '../../assets/musician.png';
import church from '../../assets/church.png';

import './styles.css';

function SecondFrame(props) {
  return (
    <div className="second-frame">
      <div className="musician">
        <img src={musician} alt="musician" />
      </div>
      <div className="second-frame-text">
        <p>Three instrumentalists, a producer and a conductor meet at a XVII century convent where they spend 4 days with the intention to share their musical language and record their interactions with no hidden agendas.</p>
      </div>
      <div className="church">
        <img src={church} alt="church" />
      </div>
    </div>
  );
}

export default SecondFrame;
