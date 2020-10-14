import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screen/HomeScreen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen/ProfileScreen'
import TransactionScreen from '../screen/TransactionScreen/TransactionScreen'
import WalletScreen from '../screen/WalletScreen/WalletScreen'
import colors from '../styles/_colors'

function TabRoute(): JSX.Element {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 70
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.secondaryDark
        },
        iconStyle: {
          flex: 0,
          width: 35,
          height: 35
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
        showLabel: false,
        adaptive: true
      }}>
      <Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return <Icon name='analytics-outline' size={30} color={focused ? '#fff' : colors.textSecondary} />
          }
        }}
      />
      <Screen
        name='Transaction'
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ focused }) => {
            return <Icon name='card-outline' size={30} color={focused ? '#fff' : colors.textSecondary} />
          }
        }}
      />
      <Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ focused }) => {
            return <Icon name='wallet-outline' size={30} color={focused ? '#fff' : colors.textSecondary} />
          }
        }}
      />
      <Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => {
            return <Icon name='person-outline' size={30} color={focused ? '#fff' : colors.textSecondary} />
          }
        }}
      />
    </Navigator>
  )
}

export default TabRoute
