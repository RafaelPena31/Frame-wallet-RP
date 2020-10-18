import auth from '@react-native-firebase/auth'
import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import headerStyle from '../../styles/componentStyle/HeaderStyle'
import colors from '../../styles/_colors'
import style from './SignStyle'

const SignInScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    if (email !== '' && password !== '') {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .catch(() => {
          Alert.alert('Invalid e-mail or password')
        })
    } else {
      Alert.alert('Invalid e-mail or password')
    }
  }

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
        <TextInput
          placeholder='E-mail'
          blurOnSubmit
          autoCompleteType='email'
          style={style.input}
          onChangeText={e => setEmail(e)}
          value={email}
        />
        <TextInput
          placeholder='Password'
          blurOnSubmit
          autoCompleteType='password'
          secureTextEntry
          style={style.input}
          onChangeText={e => setPassword(e)}
        />
        <TouchableOpacity style={style.button} onPress={handleLogin}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
