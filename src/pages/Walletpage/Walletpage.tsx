import 'antd/dist/antd.css'
import React, { useContext } from 'react'
import { currencyIconArray } from '../../assets/IconArray/IconArray'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import { WalletContext } from '../../context/WalletContext'

function Walletpage(): JSX.Element {
  const { walletValue } = useContext(WalletContext)

  return (
    <div className='homepage'>
      <Header />

      <main>
        {walletValue.map(currency => {
          return (
            <CurrencyTable
              key={currency.icon}
              id={currency.icon + 1}
              name={currencyIconArray[currency.icon].name}
              price={currency.value}
              icon={currencyIconArray[currency.icon].iconSet}
              sigla={currencyIconArray[currency.icon].sigla}
            />
          )
        })}
      </main>
    </div>
  )
}

export default Walletpage
