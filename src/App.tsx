import React from 'react'
import UserContextProvider from './context/UserContext'
import { Routes } from './routes/Routes'
import './styles/_resets.scss'

function App(): JSX.Element {
  return (
    <div className='App'>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </div>
  )
}

export default App
