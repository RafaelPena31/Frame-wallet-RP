import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import StackRoute from './StackRoute'

declare const global: { HermesInternal: null | {} }

const App = () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  )
}

export default App
