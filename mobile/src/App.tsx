import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import UserContextProvider from './context/UserContext'
import WalletContextProvider from './context/WalletContext'
import StackRoute from './routes/StackRoute'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <WalletContextProvider>
          <StackRoute />
        </WalletContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  )
}

export default App
