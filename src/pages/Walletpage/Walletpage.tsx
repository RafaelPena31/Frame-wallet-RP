import { Alert } from 'antd'
import 'antd/dist/antd.css'
import React, { useContext } from 'react'
import { currencyArray } from '../../assets/IconArray/IconArray'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import { WalletContext } from '../../context/WalletContext'

function Walletpage(): JSX.Element {
  const { walletValue, setWalletValue } = useContext(WalletContext)
  let i = 0
  return (
    <div className='homepage'>
      <Header />
      <main>
        {walletValue.length !== 0 ? (
          walletValue.map((currency, index) => {
            i += 1
            return (
              <CurrencyTable
                key={i}
                id={index + 1}
                name={currencyArray[currency.icon].name}
                price={currency.value}
                icon={currencyArray[currency.icon].iconSet}
                sigla={currencyArray[currency.icon].sigla}
                product
                onclick={() => {
                  setWalletValue(walletValue.filter(item => item !== walletValue[index]))
                }}
              />
            )
          })
        ) : (
          <Alert message='Empty Wallet' description='Return to home to buy any cryptocurrency.' type='info' showIcon />
        )}
      </main>
    </div>
  )
}

export default Walletpage
