import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import StackRoute from './StackRoute'

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  )
}

export default App
