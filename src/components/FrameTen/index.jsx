import React from 'react';
import up_arrow from '../../assets/up_arrow.png';
import down_arrow from '../../assets/down_arrow.png';

import './styles.css';

function FrameTen() {
  return (
    <div className="frame-ten" id="ten">
      <div className="up_arrow">
        <a href="#nine">
          <img src={up_arrow} alt="go up" />
        </a>
      </div>
      <div className="frame-ten-content">
        <div className="frame-ten-content-title">
          <h1>Demistifying the creative process</h1>
        </div>
        <div className="frame-ten-content-paragraphs">
          <div className="frame-ten-paragraph-left">
            <p>The process will be streamed online and opened to the public. Divulging the “no hidden agendas” attitude requires complete demystification of the artists and the creative process by revealing the quantum state of interactions, interplay dynamics, weakness of ego in the ensemble and the fraudulent tricks it uses to express itself.</p>
          </div>
          <div className="frame-ten-paragraph-right">
            <p>On the last day, there will be a live performance to showcase the whole experience, with artists playing and explaining what happened and how. This is also a necessary exchange with the site’s hosts in order to cover the expenses of the residency.</p>
          </div>
        </div>
      </div>
      <div className="down_arrow">
        <a href="#eleven">
          <img src={down_arrow} alt="go down" />
        </a>
      </div>
    </div>
  );
}

export default FrameTen;
