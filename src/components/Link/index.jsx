import React from 'react';

function Link({ href, name }) {
  return (
    <div>
      <a href={href}>{name}</a>
    </div>
  );
}

export default Link;