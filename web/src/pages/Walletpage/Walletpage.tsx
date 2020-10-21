import { Alert } from 'antd'
import 'antd/dist/antd.css'
import firebase from 'firebase'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Coin } from '../../../../types/Types'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import { UserContext } from '../../context/UserContext'
import { WalletContext } from '../../context/WalletContext'
import db from '../../functions/db'
import './Walletpage.scss'

function Walletpage(): JSX.Element {
  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { currencyUserApp } = useContext(UserContext)

  const [totalValue, setTotalValue] = useState(0)

  const history = useHistory()

  useEffect(() => {
    if (currencyUserApp !== '') {
      db.collection('wallets')
        .doc(currencyUserApp)
        .get()
        .then(response => {
          const arrayCollection = response.data()
          if (arrayCollection !== undefined) {
            const walletData: Array<Coin> = arrayCollection.coins
            setWalletValue(walletData)
          }
        })
    } else {
      history.push('/')
    }
  }, [currencyUserApp, setWalletValue, history])

  useLayoutEffect(() => {
    db.collection('wallets')
      .doc(currencyUserApp)
      .update({
        coins: walletValue,
        totalValue: firebase.firestore.FieldValue.increment(-totalValue)
      })
  }, [walletValue, currencyUserApp, totalValue])

  async function handleDeleteCurrency(index: number) {
    setTotalValue(walletValue[index].value)
    setWalletValue(walletValue.filter(item => item !== walletValue[index]))
  }

  let i = 0
  return (
    <div className='walletpage'>
      <Header />
      <main>
        {walletValue.length !== 0 ? (
          walletValue.map((currency, index) => {
            i += 1
            return (
              <CurrencyTable
                key={i}
                id={index + 1}
                name={currency.name}
                price={currency.value}
                icon={currencyArray[currency.id].iconSet}
                sigla={currencyArray[currency.id].sigla}
                product
                onclick={() => {
                  handleDeleteCurrency(index)
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
