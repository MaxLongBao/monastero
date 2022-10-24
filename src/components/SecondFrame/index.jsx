import React from 'react';
import musician from '../../assets/musician.png';
import church from '../../assets/church.png';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function SecondFrame() {
  return (
    <div className="second-frame" id="two">
      <div className="up_arrow">
        <a href="#one">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <div className="musician">
        <img src={musician} alt="musician" />
      </div>
      <div className="second-frame-text">
        <p>Three instrumentalists, a producer and a conductor meet at a XVII century convent where they spend 4 days with the intention to share their musical language and record their interactions with no hidden agendas.</p>
      </div>
      <div className="church">
        <img src={church} alt="church" />
      </div>
      <div className="down_arrow">
        <a href="#three">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default SecondFrame;
