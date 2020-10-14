import { createStackNavigator } from '@react-navigation/stack'
import { User } from 'firebase'
import * as React from 'react'
import { useState } from 'react'
import { AppFirebase } from '../config/AppFirebase'
import LandingScreen from '../screen/LandingScreen/LandingScreen'
import SignInScreen from '../screen/SignScreens/SignInScreen'
import SignUpScreen from '../screen/SignScreens/SignUpScreen'
import TabRoute from './tabRoute'

const Stack = createStackNavigator()

function StackRoute(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>()

  AppFirebase.auth().onAuthStateChanged(user => {
    setCurrentUser(user)
  })

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {currentUser !== undefined && currentUser !== null ? (
        <>
          <Stack.Screen name='Home' component={TabRoute} />
        </>
      ) : (
        <>
          <Stack.Screen name='Landing' component={LandingScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackRoute
