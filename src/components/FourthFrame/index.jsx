import React from 'react';
import google_pin from '../../assets/google_pin.png';

import './styles.css';

function FourthFrame() {
  return (
    <div className="fourth-frame">
      <div className="frame-four-content">
        <div className="pin">
          <img src={google_pin} alt="google pin" />
        </div>
        <div className="fourth-frame-text">
          <p>The meetup will take place at the Convent of the Capuchin Friars (Monastero dei frati cappuccini) in the village of Grottaglie in a temporary music studio.</p>
        </div>
      </div>
    </div>
  );
}

export default FourthFrame;
