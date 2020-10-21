import { Divider } from 'antd'
import React, { useContext, useState } from 'react'
import { BsWallet } from 'react-icons/bs'
import { CapitalValue } from '../../context/CapitalValueContext'
import { TotalValue } from '../../context/TotalValueContext'
import { UserContext } from '../../context/UserContext'
import './Header.scss'
import Menu from './Menu/Menu'

function Header(): JSX.Element {
  const { totalValueContext } = useContext(TotalValue)
  const { capitalValueContext } = useContext(CapitalValue)
  const { currencyUserApp } = useContext(UserContext)

  const [capital, setCapital] = useState<string>('none')
  const [crypto, setCrypto] = useState<string>('flex')

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
        <div className='balance' style={{ display: crypto }}>
          <button
            className='balance-btn'
            onClick={() => {
              setCapital('flex')
              setCrypto('none')
            }}>
            Change balance
          </button>
          <div>
            <h1>Cryptocurrency Balance: </h1>
            <h1>{totalValueContext.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}</h1>
          </div>
        </div>

        <div className='balance' style={{ display: capital }}>
          <button
            className='balance-btn'
            onClick={() => {
              setCapital('none')
              setCrypto('flex')
            }}>
            Change balance
          </button>
          <div>
            <h1>Invested capital Balance: </h1>
            <h1>{capitalValueContext.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}</h1>
          </div>
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
