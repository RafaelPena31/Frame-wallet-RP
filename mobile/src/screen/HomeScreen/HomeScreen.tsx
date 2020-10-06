import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import 'react-native-gesture-handler'

const HomeScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  return (
    <SafeAreaView /* style={style.homeContainer} */>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
