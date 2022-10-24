import React from 'react';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameEight() {
  return (
    <div className="frame-eight" id="eight">
      <div className="up_arrow">
        <a href="#seven">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <div className="frame-eight-content">
        <div className="content-paragraph-left">
          <p>The acoustic properties of the room will form part of the production process and act as a sixth component of the ensemble. We don’t think there’s any reason to flatten and “sterilize” the room’s frequency response during the installation of the studio because we’re not looking to comply with the market standards.</p>
        </div>
        <div className="content-paragraph-right">
          <p>However, in order to interact with the room characteristics voluntarily, it is necessary to acknowledge them.</p>
          <p>Here is a list of all available equipment.</p>
        </div>
      </div>
      <div className="down_arrow">
        <a href="#nine">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameEight;