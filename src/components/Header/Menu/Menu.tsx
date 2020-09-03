import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

function Menu(): JSX.Element {
  return (
    <nav className='menu'>
      <Link to='/'>Home</Link>
      <Link to='/'>Wallet</Link>
    </nav>
  )
}

export default Menu
