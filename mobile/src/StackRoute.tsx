import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { AppFirebase } from './config/AppFirebase'
import { currentUser } from './config/auth/CurrentUser'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import LandingScreen from './screen/LandingScreen/LandingScreen'
import SignInScreen from './screen/SignScreens/SignInScreen'
import SignUpScreen from './screen/SignScreens/SignUpScreen'

const Stack = createStackNavigator()

function StackRoute(): JSX.Element {
  AppFirebase.auth().signOut()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {currentUser.length === 0 ? (
        <>
          <Stack.Screen name='Landing' component={LandingScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name='Home' component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackRoute
