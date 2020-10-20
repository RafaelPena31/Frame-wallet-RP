import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import CapitalValueContextProvider from './context/CapitalValue'
import TotalValueContextProvider from './context/TotalValueContext'
import UserContextProvider from './context/UserContext'
import WalletContextProvider from './context/WalletContext'
import StackRoute from './routes/StackRoute'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <WalletContextProvider>
          <TotalValueContextProvider>
            <CapitalValueContextProvider>
              <StackRoute />
            </CapitalValueContextProvider>
          </TotalValueContextProvider>
        </WalletContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  )
}

export default App
