import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WalletContextProvider from '../context/WalletContext'
import Homepage from '../pages/Homepage/Home'
import Profilepage from '../pages/Profilepage/Profilepage'
import Signpage from '../pages/SignPage/Sign'
import Walletpage from '../pages/Walletpage/Walletpage'
import PrivateRoute from './PrivateRoute'
import Coinpage from '../pages/Coinpage/Coinpage'

export function Routes(): JSX.Element {
  return (
    <WalletContextProvider>
      <Router>
        <Route path='/' exact component={Homepage} />
        <Route path='/sign' component={Signpage} />
        <PrivateRoute path='/home' component={Coinpage} />
        <PrivateRoute path='/wallet' component={Walletpage} />
        <PrivateRoute path='/account' component={Profilepage} />
      </Router>
    </WalletContextProvider>
  )
}
