import React from 'react';
import music_gif from '../../assets/music_gif.gif';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameFive() {
  return (
    <div className="frame-five" id="five">
      <div className="up_arrow">
        <a href="#four">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <h1>The outcome is unknown</h1>
      <div className="frame-five-content">
        <p>We can assume the musicians will record sounds, but this doesn’t mean ‘music’ should necessarily be the outcome and there’s no indication as to when and in what form it will see the light of day.</p>
        <div className="frame-five-image">
          <img src={music_gif} alt="music gif" />
        </div>
        <p>While promising to release the material via a physical format would attract a lot more attention, it would unfortunately also compromise the process.</p>
      </div>
      <div className="down_arrow">
        <a href="#six">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameFive;
