import React from 'react';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameTwelve() {
  return (
    <div className="frame-twelve" id="twelve">
      <div className="up_arrow">
        <a href="#eleven">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <div className="frame-twelve-content">
        <p>Will you be joining us?</p>
      </div>
      <div className="down_arrow">
        <a href="#thirteen">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameTwelve;