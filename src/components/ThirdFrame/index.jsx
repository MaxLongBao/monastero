import React from 'react';
import monasteroVideo from '../../assets/monastero_video.mp4';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function ThirdFrame() {
  return (
    <div className="third-frame" id="three">
      <div className="up_arrow">
        <a href="#two">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      {/* <video autoPlay controls muted width="250"> */}
      <video autoPlay muted>
      <source src={monasteroVideo} />
      </video>
      <div className="down_arrow">
        <a href="#four">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default ThirdFrame;