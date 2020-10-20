import auth from '@react-native-firebase/auth'
import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'
import api from '../../api/api'
import headerStyle from '../../styles/componentStyle/HeaderStyle'
import colors from '../../styles/_colors'
import style from './SignStyle'

const SignUpScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleCreate() {
    if (name !== '' && email !== '' && password !== '') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const user = auth().currentUser

          if (user !== null) {
            user.updateProfile({
              displayName: name
            })
          }

          api.post('users', { email, uid: user?.uid, name }).catch(() => {
            Alert.alert('Error', 'Account creation denied user')
          })
          api
            .post('wallet', { uid: user?.uid, coins: [], totalValue: 0, capitalValue: 0 })
            .then(() => {
              Alert.alert('Success', 'Your account was created successfully')
            })
            .catch(e => {
              Alert.alert('Error', 'Account creation denied wallet')
              Alert.alert(e)
            })
          /*           api.put('users', { uid: user?.uid, walletId:  })
           */
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
          placeholder='Name'
          autoCapitalize='words'
          blurOnSubmit
          autoCompleteType='name'
          style={style.input}
          onChangeText={e => setName(e)}
          value={name}
        />
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
          value={password}
        />
        <TouchableOpacity style={style.button} onPress={handleCreate}>
          <Text style={style.textButton}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
