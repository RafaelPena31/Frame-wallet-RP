import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Coin } from '../../../types/Types'
import { CapitalValue } from '../context/CapitalValue'
import { TotalValue } from '../context/TotalValueContext'
import { UserContext } from '../context/UserContext'
import { WalletContext } from '../context/WalletContext'
import LandingScreen from '../screen/LandingScreen/LandingScreen'
import SignInScreen from '../screen/SignScreens/SignInScreen'
import SignUpScreen from '../screen/SignScreens/SignUpScreen'
import TabRoute from './tabRoute'

const Stack = createStackNavigator()

function StackRoute(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>()
  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)
  const { setWalletValue } = useContext(WalletContext)
  const { totalValueContext, setTotalValueContext } = useContext(TotalValue)
  const { capitalValueContext, setCapitalValueContext } = useContext(CapitalValue)

  auth().onAuthStateChanged(user => {
    setCurrentUser(user)
    if (user?.uid !== undefined) {
      setCurrencyUserApp(user?.uid)
    }
  })

  useEffect(() => {
    if (currencyUserApp !== null && currencyUserApp !== undefined) {
      firestore()
        .collection('wallets')
        .doc(currencyUserApp)
        .get()
        .then(doc => {
          const arrayCollection = doc.data()
          if (arrayCollection !== undefined) {
            const walletDataCoins: Array<Coin> = arrayCollection.coins
            const walletDataTotal: number = arrayCollection.totalValue
            const walletDataCapital: number = arrayCollection.capitalValue
            setWalletValue(walletDataCoins)
            setTotalValueContext(walletDataTotal)
            setCapitalValueContext(walletDataCapital)
            console.log('stack')
          }
        })
    }
  }, [currencyUserApp])

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
