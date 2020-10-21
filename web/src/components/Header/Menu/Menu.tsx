import { message } from 'antd'
import 'antd/dist/antd.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppFirebase } from '../../../config/AppFirebase'
import { CapitalValue } from '../../../context/CapitalValueContext'
import { TotalValue } from '../../../context/TotalValueContext'
import { UserContext } from '../../../context/UserContext'
import { WalletContext } from '../../../context/WalletContext'
import './Menu.scss'

function Menu(): JSX.Element {
  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)
  const { setCapitalValueContext } = useContext(CapitalValue)
  const { setTotalValueContext } = useContext(TotalValue)

  const warning = () => {
    message.warning('No cryptocurrencies have been purchased yet. Your wallet is empty.')
  }

  if (currencyUserApp !== undefined) {
    if (walletValue.length !== 0) {
      return (
        <nav className='menu'>
          <Link
            to='/'
            onClick={() => {
              AppFirebase.auth().signOut()
              setWalletValue([])
              setCurrencyUserApp(undefined)
            }}>
            Sign out
          </Link>
          <Link to='/home'>Home</Link>
          <Link to='/account'>Account</Link>
          <Link to='/wallet'>Wallet</Link>
        </nav>
      )
    }
    return (
      <nav className='menu'>
        <Link
          to='/'
          onClick={() => {
            AppFirebase.auth().signOut()
            setWalletValue([])
            setCurrencyUserApp(undefined)
            setCapitalValueContext(0)
            setTotalValueContext(0)
          }}>
          Sign out
        </Link>
        <Link to='/home'>Home</Link>
        <Link to='/account'>Account</Link>
        <Link to='/home' onClick={warning}>
          Wallet
        </Link>
      </nav>
    )
  }
  return (
    <nav className='menu'>
      <Link to='/'>Home</Link>
      <Link to='/sign'>Sign IN</Link>
      <Link to='/sign'>Sign UP</Link>
    </nav>
  )
}

export default Menu
