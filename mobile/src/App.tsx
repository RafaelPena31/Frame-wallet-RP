import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import TotalValueContextProvider from './context/TotalValueContext'
import UserContextProvider from './context/UserContext'
import WalletContextProvider from './context/WalletContext'
import StackRoute from './routes/StackRoute'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <TotalValueContextProvider>
          <WalletContextProvider>
            <StackRoute />
          </WalletContextProvider>
        </TotalValueContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  )
}

export default App
