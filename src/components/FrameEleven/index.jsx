import React from 'react';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameEleven() {
  return (
    <div className="frame-eleven" id="eleven">
      <div className="up_arrow">
        <a href="#ten">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <div className="frame-eleven-content">
        <div className="frame-eleven-title">
          <h1>Commitment is necessary</h1>
        </div>
        <div className="frame-eleven-paragraph">
          <p>We’re not counting on public funding; the organization of the meetup depends on the joint effort, exchange economy and passion of the people involved. These form a very delicate equilibrium which can’t depend on last minute decisions.</p>
        </div>
      </div>
      <div className="down_arrow">
        <a href="#twelve">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameEleven;
