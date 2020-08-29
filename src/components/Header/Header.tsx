import React, { ReactNode } from 'react';
import './Header.scss';

import { BsWallet } from 'react-icons/bs';
import Menu from './Menu/Menu';

interface Props {
  props?: ReactNode;
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="header">
      <section className="container-logo">
        <div className="logo">
          <BsWallet size={30} color="#fff" />
          <h1>Frame Wallet</h1>
        </div>
        <Menu />
      </section>
      <section className="button-currency">
       {props.children}
      </section>
    </header>
  );
}

export default Header;
