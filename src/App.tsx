import React from 'react'
import WalletContextProvider from './context/WalletContext'
import { Routes } from './routes'
import './styles/_resets.scss'

function App(): JSX.Element {
  return (
    <div className='App'>
      <WalletContextProvider>
        <Routes />
      </WalletContextProvider>
    </div>
  )
}

export default App
