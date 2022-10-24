import React from 'react';
import google_pin from '../../assets/google_pin.png';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FourthFrame() {
  return (
    <div className="fourth-frame" id="four">
      <div className="up_arrow">
        <a href="#three">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <div className="frame-four-content">
        <div className="pin">
          <img src={google_pin} alt="google pin" />
        </div>
        <div className="fourth-frame-text">
          <p>The meetup will take place at the Convent of the Capuchin Friars (Monastero dei frati cappuccini) in the village of Grottaglie in a temporary music studio.</p>
        </div>
      </div>
      <div className="down_arrow">
        <a href="#five">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FourthFrame;
