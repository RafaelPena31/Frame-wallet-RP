import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CapitalValueContextProvider from '../context/CapitalValueContext'
import TotalValueContextProvider from '../context/TotalValueContext'
import UserContextProvider from '../context/UserContext'
import WalletContextProvider from '../context/WalletContext'
import Coinpage from '../pages/Coinpage/Coinpage'
import Homepage from '../pages/Homepage/Home'
import Profilepage from '../pages/Profilepage/Profilepage'
import Signpage from '../pages/SignPage/Sign'
import Walletpage from '../pages/Walletpage/Walletpage'
import PrivateRoute from './PrivateRoute'

export function Routes(): JSX.Element {
  return (
    <UserContextProvider>
      <WalletContextProvider>
        <TotalValueContextProvider>
          <CapitalValueContextProvider>
            <Router>
              <Route path='/' exact component={Homepage} />
              <Route path='/sign' component={Signpage} />
              <PrivateRoute path='/home' component={Coinpage} />
              <PrivateRoute path='/wallet' component={Walletpage} />
              <PrivateRoute path='/account' component={Profilepage} />
            </Router>
          </CapitalValueContextProvider>
        </TotalValueContextProvider>
      </WalletContextProvider>
    </UserContextProvider>
  )
}
