import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage/Home'
import Signpage from '../pages/SignPage/Sign'
import Walletpage from '../pages/Walletpage/Walletpage'
import PrivateRoute from './PrivateRoute'
import AuthProvider from '../context/AuthContext'
import WalletContextProvider from '../context/WalletContext'

export function Routes(): JSX.Element {
  return (
    <AuthProvider>
      <WalletContextProvider>
        <Router>
          <Route path='/' exact component={Signpage} />
          <PrivateRoute path='/home' component={Homepage} />
          <Route path='/wallet' component={Walletpage} />
        </Router>
      </WalletContextProvider>
    </AuthProvider>
  )
}
