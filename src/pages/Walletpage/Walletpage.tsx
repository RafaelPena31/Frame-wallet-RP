import { Alert } from 'antd'
import 'antd/dist/antd.css'
import firebase from 'firebase'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { currencyArray } from '../../assets/IconArray/IconArray'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import { UserContext } from '../../context/UserContext'
import { WalletContext } from '../../context/WalletContext'
import db from '../../functions/db'
import { Coin } from '../../types/Types'
import './Walletpage.scss'

function Walletpage(): JSX.Element {
  const [valueDelete, setValueDelete] = useState(0)

  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { currencyUserApp } = useContext(UserContext)

  const history = useHistory()

  let idWallet = ''

  if (currencyUserApp.length !== 0) {
    idWallet = currencyUserApp[0].walletId
  } else {
    history.push('/')
  }

  useEffect(() => {
    if (idWallet !== '') {
      db.collection('wallets')
        .doc(idWallet)
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
  }, [currencyUserApp, idWallet, setWalletValue, history])

  useLayoutEffect(() => {
    db.collection('wallets')
      .doc(idWallet)
      .update({
        coins: walletValue,
        totalValue: firebase.firestore.FieldValue.increment(-valueDelete)
      })
  }, [walletValue, idWallet, valueDelete])

  async function handleDeleteCurrency(index: number) {
    const localValue = walletValue[index].value
    setValueDelete(localValue)
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
