import React from 'react';
import graph from '../../assets/graph.jpg';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameNine() {
  return (
    <div className="frame-nine" id="nine">
      <div className="up_arrow">
        <a href="#eight">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <img src={graph} alt="graph" />
      <div className="down_arrow">
        <a href="#ten">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameNine;