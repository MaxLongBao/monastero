import React from 'react';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameSeven() {
  return (
    <div className="frame-seven" id="seven">
      <div className="up_arrow">
        <a href="#six">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <div className="frame-seven-content">
        <div className="frame-seven-content-title">
          <h1>Not a label.</h1><h1>Not a distribution channel.</h1>
        </div>
        <div className="content-paragraph">
          <p>The aim of this residency isn’t to become a distribution channel but an insight into creative practices. This is why we want to discuss the format of release at a later stage once the creative process has come to an end. If you are a distribution channel and would like to join the conversation, please get in touch.</p>
        </div>
      </div>
      <div className="down_arrow">
        <a href="#eight">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameSeven