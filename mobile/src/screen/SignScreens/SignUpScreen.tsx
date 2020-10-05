import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'
import headerStyle from '../../styles/componentStyle/HeaderStyle'
import colors from '../../styles/_colors'
import style from './SignStyle'

const SignUpScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
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
        <TextInput placeholder='Name' autoCapitalize='words' blurOnSubmit autoCompleteType='name' style={style.input} />
        <TextInput placeholder='E-mail' blurOnSubmit autoCompleteType='email' style={style.input} />
        <TextInput placeholder='Password' blurOnSubmit autoCompleteType='password' secureTextEntry style={style.input} />
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
