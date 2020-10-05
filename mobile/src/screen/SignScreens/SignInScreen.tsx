import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'
import headerStyle from '../../styles/componentStyle/HeaderStyle'
import colors from '../../styles/_colors'
import style from './SignStyle'

const SignInScreen = ({ navigation }: StackScreenProps<ParamListBase>) => {
  return (
    <SafeAreaView style={style.signUpContainer}>
      <View style={headerStyle.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='chevron-left' size={40} color={colors.secondaryDark} />
        </TouchableOpacity>
      </View>
      <View style={style.logoContainer}>
        <Icon name='wallet' size={70} color={colors.secondaryMiddle} />
        <Text style={style.logoTitle}>Frame Wallet</Text>
      </View>
      <View style={style.formContainer}>
        <TextInput placeholder='E-mail' blurOnSubmit={true} autoCompleteType='email' style={style.input} />
        <TextInput placeholder='Password' blurOnSubmit={true} autoCompleteType='password' secureTextEntry={true} style={style.input} />
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
