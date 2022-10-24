import React from 'react';
import building from '../../assets/building.png';

import './styles.css';

function FrameThirteen() {
  return (
    <div className="frame-thirteen">
      <div className="frame-thirteen-content">
        <div className="building">
          <img src={building} alt="building" />
        </div>
        <div className="contacts">
          <h4>CONTACTS</h4>
          <p>Francesco Piro</p>
          <p>ppppp@gmail.com</p>
          <p>+39 459 384 5204</p>
        </div>
      </div>
    </div>
  );
}

export default FrameThirteen;
