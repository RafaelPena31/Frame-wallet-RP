import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import WalletContextProvider from './context/WalletContext'
import StackRoute from './routes/StackRoute'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <WalletContextProvider>
        <StackRoute />
      </WalletContextProvider>
    </NavigationContainer>
  )
}

export default App
