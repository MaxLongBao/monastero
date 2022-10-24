import React from 'react';
import map from '../../assets/map.png';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameSix() {
  return (
    <div className="frame-six" id="six">
      <div className="up_arrow">
        <a href="#five">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <img src={map} alt="map" />
      <div className="down_arrow">
        <a href="#seven">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameSix;
