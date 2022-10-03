import React from 'react';
import Link from '../Link';
import './styles.css';

const Navbar = () => {
  return (
    <div class="flex-nav">
      <Link href="#" name="CONTACT" />
      <Link href="#" name="FAQ" />
    </div>
  );
};

export default Navbar;
