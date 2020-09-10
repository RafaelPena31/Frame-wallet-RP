import { message } from 'antd'
import 'antd/dist/antd.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WalletContext } from '../../../context/WalletContext'
import './Menu.scss'

function Menu(): JSX.Element {
  const warning = () => {
    message.warning('No cryptocurrencies have been purchased yet. Your wallet is empty.')
  }

  const { walletValue } = useContext(WalletContext)

  if (walletValue.length !== 0) {
    return (
      <nav className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/wallet'>Wallet</Link>
      </nav>
    )
  }
  return (
    <nav className='menu'>
      <Link to='/'>Home</Link>
      <Link to='/' onClick={warning}>
        Wallet
      </Link>
    </nav>
  )
}

export default Menu
