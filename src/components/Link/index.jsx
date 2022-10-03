import React from 'react';
import './styles.css';

function Link({ href, name }) {
  return (
    <div>
      <a href={href}>{name}</a>
    </div>
  );
}

export default Link;