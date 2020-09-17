import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WalletContextProvider from '../context/WalletContext'
import Homepage from '../pages/Homepage/Home'
import Profilepage from '../pages/Profilepage/Profilepage'
import Signpage from '../pages/SignPage/Sign'
import Walletpage from '../pages/Walletpage/Walletpage'
import PrivateRoute from './PrivateRoute'

export function Routes(): JSX.Element {
  return (
    <WalletContextProvider>
      <Router>
        <Route path='/' exact component={Signpage} />
        <PrivateRoute path='/home' component={Homepage} />
        <PrivateRoute path='/wallet' component={Walletpage} />
        <PrivateRoute path='/account' component={Profilepage} />
      </Router>
    </WalletContextProvider>
  )
}
