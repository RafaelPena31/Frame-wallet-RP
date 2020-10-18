import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import LandingScreen from '../screen/LandingScreen/LandingScreen'
import SignInScreen from '../screen/SignScreens/SignInScreen'
import SignUpScreen from '../screen/SignScreens/SignUpScreen'
import TabRoute from './tabRoute'

const Stack = createStackNavigator()

function StackRoute(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>()
  const { setCurrencyUserApp } = useContext(UserContext)

  auth().onAuthStateChanged(user => {
    setCurrentUser(user)
    if (user?.uid !== undefined) {
      setCurrencyUserApp(user?.uid)
    }
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
