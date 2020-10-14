import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import style from './ProfileStyle'

const ProfileScreen = (/* { navigation }: StackScreenProps<ParamListBase> */): JSX.Element => {
  /* AppFirebase.auth().signOut() */
  const { Bar } = Progress
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <ScrollView>
        <LinearGradient colors={['#fff', '#d1dce2']} useAngle angle={250} angleCenter={{ x: 0.3, y: 1 }} style={style.profileContainer}>
          <View style={style.profileHeader}>
            <Text style={style.textHeader}>Your wallet</Text>
          </View>
          <View style={style.valueContent}>
            <View style={style.balance}>
              <Text>Balance</Text>
              <Text>Add +</Text>
            </View>
            <Text>$00.00</Text>
            <View style={style.valueButtonContainer}>
              <TouchableOpacity style={style.valueButton}>
                <Text>Open wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.valueButton}>
                <Text>Buy cryptocurrency</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.progressContainer}>
            <Bar progress={0.73} width={320} color='green' height={13} style={style.progressBar} />
            <Text style={style.progressLabel}>Label</Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
