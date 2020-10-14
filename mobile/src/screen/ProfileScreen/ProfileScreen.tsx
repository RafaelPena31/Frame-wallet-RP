import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/_colors'
import style from './ProfileStyle'

const ProfileScreen = (/* { navigation }: StackScreenProps<ParamListBase> */): JSX.Element => {
  /* AppFirebase.auth().signOut() */
  const { Bar } = Progress
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <ScrollView>
        <LinearGradient
          colors={[colors.secondaryDark, colors.secondaryLight]}
          useAngle
          angle={145}
          angleCenter={{ x: 0.3, y: 1 }}
          style={style.profileHeader}>
          <View style={style.logoContainer}>
            <Icon name='wallet' size={40} color='#ffffff' />
            <Text style={style.logoText}>Frame Wallet</Text>
          </View>
          <View style={style.titleContent}>
            <Text style={style.textLabelHeader}>Welcome back,</Text>
            <Text style={style.textTitleHeader}>Rafael Pena</Text>
          </View>
          <View style={style.valueContent}>
            <Text style={style.textValueLabelHeader}>Your balance</Text>
            <Text style={style.textValueHeader}>$00.00</Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#fff', '#d1dce2']}
          useAngle
          angle={250}
          angleCenter={{ x: 0.3, y: 1 }}
          style={style.profileContainer}></LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
