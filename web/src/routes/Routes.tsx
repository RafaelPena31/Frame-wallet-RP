import { User } from 'firebase'
import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Coin } from '../../../types/Types'
import { AppFirebase } from '../config/AppFirebase'
import { CapitalValue } from '../context/CapitalValueContext'
import { InvestPorc } from '../context/InvestPorcContext'
import { TotalValue } from '../context/TotalValueContext'
import UserContextProvider, { UserContext } from '../context/UserContext'
import WalletContextProvider, { WalletContext } from '../context/WalletContext'
import db from '../functions/db'
import Coinpage from '../pages/Coinpage/Coinpage'
import Homepage from '../pages/Homepage/Home'
import Profilepage from '../pages/Profilepage/Profilepage'
import Signpage from '../pages/SignPage/Sign'
import Walletpage from '../pages/Walletpage/Walletpage'
import PrivateRoute from './PrivateRoute'

export function Routes(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>()
  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)
  const { setWalletValue } = useContext(WalletContext)
  const { setTotalValueContext } = useContext(TotalValue)
  const { setCapitalValueContext } = useContext(CapitalValue)
  const { setInvestPorcContext } = useContext(InvestPorc)

  AppFirebase.auth().onAuthStateChanged(user => {
    setCurrentUser(user)
    if (user?.uid !== undefined) {
      setCurrencyUserApp(user?.uid)
    }
  })

  useEffect(() => {
    if (currencyUserApp !== null && currencyUserApp !== undefined) {
      db.collection('wallets')
        .doc(currencyUserApp)
        .get()
        .then(doc => {
          const arrayCollection = doc.data()
          if (arrayCollection !== undefined) {
            const walletDataCoins: Array<Coin> = arrayCollection.coins
            const walletDataTotal: number = arrayCollection.totalValue
            const walletDataCapital: number = arrayCollection.capitalValue
            if (walletDataCapital !== 0) {
              const progressDataTotalPorc = (walletDataTotal * 100) / (walletDataTotal + walletDataCapital)
              setInvestPorcContext(progressDataTotalPorc)
              setWalletValue(walletDataCoins)
              setTotalValueContext(walletDataTotal)
              setCapitalValueContext(walletDataCapital)
            } else {
              setInvestPorcContext(0)
              setWalletValue(walletDataCoins)
              setTotalValueContext(walletDataTotal)
              setCapitalValueContext(walletDataCapital)
            }
          }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyUserApp])

  return (
    <UserContextProvider>
      <WalletContextProvider>
        <Router>
          <Route path='/' exact component={Homepage} />
          <Route path='/sign' component={Signpage} /> <PrivateRoute path='/home' component={Coinpage} />
          <PrivateRoute path='/wallet' component={Walletpage} />
          <PrivateRoute path='/account' component={Profilepage} />
        </Router>
      </WalletContextProvider>
    </UserContextProvider>
  )
}
