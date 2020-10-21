import { Divider } from 'antd'
import React, { useContext } from 'react'
import { BsWallet } from 'react-icons/bs'
import { TotalValue } from '../../context/TotalValueContext'
import { UserContext } from '../../context/UserContext'
import './Header.scss'
import Menu from './Menu/Menu'

function Header(): JSX.Element {
  const { totalValueContext } = useContext(TotalValue)
  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)

  if (currencyUserApp !== undefined) {
    return (
      <header className='header'>
        <section className='container-logo'>
          <div className='logo'>
            <BsWallet size={30} color='#fff' />
            <h1>Frame Wallet</h1>
          </div>
          <Menu />
        </section>
        <Divider className='divider' />
        <div className='balance'>
          <h1>Cryptocurrency Balance: </h1>
          <h1>{totalValueContext.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}</h1>
        </div>
      </header>
    )
  } else {
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
}

export default Header
