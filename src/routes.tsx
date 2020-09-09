import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Home'
import Walletpage from './pages/Walletpage/Walletpage'

export function Routes(): JSX.Element {
  return (
    <Router>
      <Route path='/' exact component={Homepage} />
      <Route path='/wallet' exact component={Walletpage} />
    </Router>
  )
}
