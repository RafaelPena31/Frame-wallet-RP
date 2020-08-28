import React from 'react';
import './Menu.scss';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/">Wallet</Link>
    </nav>
  );
}

export default Menu;
