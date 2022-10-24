import React from 'react';
import Navbar from '../Navbar';
import pentagramma from '../../assets/pentagramma.png';
import monastero_main from '../../assets/monastero_main.png';
import down_arrow from '../../assets/down_arrow.png';
import './styles.css';

function FirstFrame() {
  return (
    <div id='one'>
      <Navbar />
      <div className="first-frame">
        <div className="pentagramma">
          <img src={pentagramma} alt="pentagramma" />
        </div>
        <div className="monastero-main">
          <img src={monastero_main} alt="monastero" />
        </div>
        <div className="first-frame-text">
          <p>A meetup of sound artists researching unuseful practices</p>
        </div>
        <div className="down_arrow">
          <a href="#two" >
            <img src={down_arrow} alt="down" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FirstFrame;
