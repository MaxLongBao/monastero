import React from 'react';
import pentagramma from '../../assets/pentagramma.png';
import monastero_main from '../../assets/monastero_main.png';
import './styles.css';

function FirstFrame(props) {
  return (
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
    </div>
  );
}

export default FirstFrame;