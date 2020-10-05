import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import LandingScreen from './screen/LandingScreen/LandingScreen'
import SignInScreen from './screen/SignScreens/SignInScreen'
import SignUpScreen from './screen/SignScreens/SignUpScreen'

const Stack = createStackNavigator()

function StackRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Landing' component={LandingScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name='SignIn' component={SignInScreen} />
    </Stack.Navigator>
  )
}

export default StackRoute
