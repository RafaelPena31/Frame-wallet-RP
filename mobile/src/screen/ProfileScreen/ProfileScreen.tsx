import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
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
          angle={290}
          angleCenter={{ x: 0, y: 1 }}
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

        <LinearGradient colors={['#fcfcfc', '#d1dce2']} useAngle angle={250} angleCenter={{ x: 0.3, y: 1 }} style={style.profileContainer}>
          <View style={style.infoContent}>
            <View style={style.infoUnit}>
              <Text style={style.infoLabel}>E-mail:</Text>
              <Text style={style.infoText}>rafaelppena31@gmail.com</Text>
            </View>
            <View style={style.infoUnit}>
              <Text style={style.infoLabel}>User ID:</Text>
              <Text style={style.infoText}>################################</Text>
            </View>
          </View>

          <View style={style.dividerContainer}>
            <Text style={style.dividerText}> ─ Profile options ────────</Text>
          </View>

          <View>
            <View style={style.buttonContentTransaction}>
              <TouchableOpacity style={style.buttonTransaction}>
                <Icon name='mail-unread' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Change your e-mail</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonTransaction}>
                <Icon name='keypad' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Change your password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.buttonTransaction2}>
              <Icon name='people' size={75} color='#ffffff' style={{ margin: 15 }} />
              <Text style={[style.buttonTransactionText]}>Change your full name</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
