import React from 'react';
import Link from '../Link';
import './styles.css';

const Navbar = () => {
  return (
    <div className="nav">
      <Link href="#" name="CONTACT" />
      <Link href="#" name="FAQ" />
    </div>
  );
};

export default Navbar;
