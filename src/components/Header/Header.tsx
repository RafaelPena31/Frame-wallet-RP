import React from 'react'
import { BsWallet } from 'react-icons/bs'
import './Header.scss'
import Menu from './Menu/Menu'

function Header(): JSX.Element {
  return (
    <header className='header'>
      <section className='container-logo'>
        <div className='logo'>
          <BsWallet size={30} color='#fff' />
          <h1>Frame Wallet</h1>
        </div>
        <Menu />
      </section>
    </header>
  )
}

export default Header
