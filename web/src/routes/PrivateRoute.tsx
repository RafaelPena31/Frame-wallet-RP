import { User } from 'firebase'
import React, { useContext, useEffect, useState } from 'react'
import { Redirect, Route, RouteProps, useHistory } from 'react-router-dom'
import { Coin } from '../../../types/Types'
import { AppFirebase } from '../config/AppFirebase'
import { CapitalValue } from '../context/CapitalValueContext'
import { TotalValue } from '../context/TotalValueContext'
import { UserContext } from '../context/UserContext'
import { WalletContext } from '../context/WalletContext'
import db from '../functions/db'

const PrivateRoute = ({ path, component }: RouteProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>()
  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)
  const { setWalletValue } = useContext(WalletContext)
  const { setTotalValueContext } = useContext(TotalValue)
  const { setCapitalValueContext } = useContext(CapitalValue)

  const history = useHistory()

  AppFirebase.auth().onAuthStateChanged(user => {
    setCurrentUser(user)
    if (user?.uid !== undefined) {
      setCurrencyUserApp(user?.uid)
      history.push('/home')
    } else {
      history.push('/')
    }
  })

  useEffect(() => {
    if (currencyUserApp !== null && currencyUserApp !== undefined) {
      console.log('entrou p')
      db.collection('wallets')
        .doc(currencyUserApp)
        .get()
        .then(doc => {
          const arrayCollection = doc.data()
          if (arrayCollection !== undefined) {
            const walletDataCoins: Array<Coin> = arrayCollection.coins
            const walletDataTotal: number = arrayCollection.totalValue
            const walletDataCapital: number = arrayCollection.capitalValue
            setWalletValue(walletDataCoins)
            setTotalValueContext(walletDataTotal)
            setCapitalValueContext(walletDataCapital)
            console.log(walletDataCapital)
          }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyUserApp])

  return <>{currentUser !== undefined && currentUser !== null ? <Route path={path} exact component={component} /> : <Redirect to='/' />}</>
}
export default PrivateRoute
