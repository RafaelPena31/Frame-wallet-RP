import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import React, { useContext, useState } from 'react'
import { Alert, Modal, SafeAreaView, StatusBar, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import api from '../../api/api'
import { CapitalValue } from '../../context/CapitalValueContext'
import { TotalValue } from '../../context/TotalValueContext'
import { UserContext } from '../../context/UserContext'
import { WalletContext } from '../../context/WalletContext'
import BuyModalStyle from '../../styles/componentStyle/Modals/BuyModalStyle'
import colors from '../../styles/_colors'
import style from './ProfileStyle'

const ProfileScreen = (): JSX.Element => {
  const [emailVisible, setEmailVisible] = useState<boolean>(false)
  const [emailValue, setEmailValue] = useState<string>('')
  const [emailReal, setEmailReal] = useState<string>('')
  const [passVisible, setPassVisible] = useState<boolean>(false)
  const [passValue, setPassValue] = useState<string>('')
  const [nameVisible, setNameVisible] = useState<boolean>(false)
  const [nameValue, setNameValue] = useState<string>('')
  const [nameReal, setNameReal] = useState<string>('')
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string>('')

  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { totalValueContext, setTotalValueContext } = useContext(TotalValue)
  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)
  const { setCapitalValueContext } = useContext(CapitalValue)

  firestore()
    .collection('users')
    .doc(currencyUserApp)
    .onSnapshot(doc => {
      const userCollection = doc.data()
      if (userCollection !== undefined) {
        const userDataName: string = userCollection.name
        const userDataEmail: string = userCollection.email
        setNameReal(userDataName)
        setEmailReal(userDataEmail)
      }
    })

  async function handleUploadEmail() {
    if (emailValue.length > 8) {
      await auth()
        .currentUser?.updateEmail(emailValue)
        .then(() => {
          Alert.alert('E-mail update success')
        })
        .catch(() => {
          Alert.alert("We can't update your e-mail now. Try later.")
          setEmailVisible(!emailVisible)
        })
      api
        .put('usersData', { uid: currencyUserApp, name: nameReal, email: emailValue })
        .then(() => {
          Alert.alert('E-mail update success')
          setEmailVisible(!emailVisible)
        })
        .catch(() => {
          Alert.alert("We can't update your e-mail now. Try later.")
          setEmailVisible(!emailVisible)
        })
    } else {
      Alert.alert('Invalid value')
    }
  }

  async function handleUploadPass() {
    if (passValue !== '' && passValue.length > 5) {
      try {
        await auth().currentUser?.updatePassword(passValue)
        Alert.alert('Password update success')
        setPassVisible(!passVisible)
      } catch (err) {
        Alert.alert("We can't update your password now. Try later.")
        setPassVisible(!passVisible)
      }
    } else {
      Alert.alert('Invalid value')
    }
  }

  async function handleUploadName() {
    if (nameValue !== '' && nameValue.length > 2) {
      api
        .put('usersData', { uid: currencyUserApp, name: nameValue, email: emailReal })
        .then(() => {
          Alert.alert('Username update success')
          setNameVisible(!nameVisible)
        })
        .catch(() => {
          Alert.alert("We can't update your username now. Try later.")
          setNameVisible(!nameVisible)
        })
    } else {
      Alert.alert('Invalid value')
    }
  }

  async function handleAccountDelete() {
    if (walletValue.length === 0) {
      if (deleteConfirm.toUpperCase() === 'YES') {
        try {
          await firestore().collection('wallets').doc(currencyUserApp).delete()
          await firestore().collection('users').doc(currencyUserApp).delete()
          await auth().currentUser?.delete()
          setWalletValue([])
          setCurrencyUserApp('')
          setTotalValueContext(0)
          setCapitalValueContext(0)
          Alert.alert('Your account has been deleted')
        } catch (e) {
          Alert.alert('Error', "We can't delete your account now. Try later.")
        }
      } else {
        Alert.alert('Invalid confirm')
      }
    } else {
      Alert.alert(
        'Error',
        'We cannot delete your account now because you still have cryptocurrencies in your wallet. Sell to be able to exclude.'
      )
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Modais */}

      {/* Email */}

      <Modal animationType='fade' transparent visible={emailVisible} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text style={BuyModalStyle.titleModal}>Update your e-mail</Text>
            <View style={BuyModalStyle.formModal}>
              <TextInput
                placeholder='New e-mail'
                style={BuyModalStyle.txtModal}
                textContentType='emailAddress'
                onChangeText={e => setEmailValue(e)}
                value={emailValue}
              />
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={handleUploadEmail}>
                <Text style={BuyModalStyle.buttonModalText}>Update</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setEmailVisible(!emailVisible)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel Update</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Email */}

      {/* Password */}

      <Modal animationType='fade' transparent visible={passVisible} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text style={BuyModalStyle.titleModal}>Update your password</Text>
            <View style={BuyModalStyle.formModal}>
              <TextInput
                placeholder='New password'
                style={BuyModalStyle.txtModal}
                textContentType='password'
                blurOnSubmit
                autoCompleteType='password'
                secureTextEntry
                onChangeText={e => setPassValue(e)}
                value={passValue}
              />
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={handleUploadPass}>
                <Text style={BuyModalStyle.buttonModalText}>Update</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setPassVisible(!passVisible)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel Update</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Password */}

      {/* DisplayName */}

      <Modal animationType='fade' transparent visible={nameVisible} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text style={BuyModalStyle.titleModal}>Update your name</Text>
            <View style={BuyModalStyle.formModal}>
              <TextInput
                placeholder='New display name'
                style={BuyModalStyle.txtModal}
                textContentType='name'
                blurOnSubmit
                autoCompleteType='username'
                onChangeText={e => setNameValue(e.toString())}
                value={nameValue}
              />
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={handleUploadName}>
                <Text style={BuyModalStyle.buttonModalText}>Update</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setNameVisible(!nameVisible)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel Update</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* DisplayName */}

      {/* Delete */}

      <Modal animationType='fade' transparent visible={deleteVisible} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text style={BuyModalStyle.titleModal}>Are you sure you would like to delete your account? The action is irreversible</Text>
            <View style={BuyModalStyle.formModal}>
              <TextInput
                placeholder='type "YES" to continue'
                style={BuyModalStyle.txtModal}
                blurOnSubmit
                onChangeText={e => setDeleteConfirm(e.toString())}
                value={deleteConfirm}
              />
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={handleAccountDelete}>
                <Text style={BuyModalStyle.buttonModalText}>Delete</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setDeleteVisible(!deleteVisible)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel delete</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Delete */}

      {/* Modais */}

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
            <Text style={style.textTitleHeader}>{nameReal}</Text>
          </View>
          <View style={style.valueContent}>
            <Text style={style.textValueLabelHeader}>Your balance</Text>
            <Text style={style.textValueHeader}>
              {totalValueContext.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient colors={['#fcfcfc', '#d1dce2']} useAngle angle={250} angleCenter={{ x: 0.3, y: 1 }} style={style.profileContainer}>
          <View style={style.infoContent}>
            <View style={style.infoUnit}>
              <Text style={style.infoLabel}>E-mail:</Text>
              <Text style={style.infoText}>{emailReal}</Text>
            </View>
            <View style={style.infoUnit}>
              <Text style={style.infoLabel}>User ID:</Text>
              <Text style={style.infoText}>{currencyUserApp}</Text>
            </View>
          </View>

          <View style={style.dividerContainer}>
            <Text style={style.dividerText}> ─ Profile options ────────</Text>
          </View>

          <View>
            <View style={style.buttonContentTransaction}>
              <TouchableOpacity style={style.buttonTransaction} onPress={() => setEmailVisible(!emailVisible)}>
                <Icon name='mail-unread' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Change your e-mail</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonTransaction} onPress={() => setPassVisible(!passVisible)}>
                <Icon name='keypad' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Change your password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.buttonTransaction2} onPress={() => setNameVisible(!nameVisible)}>
              <Icon name='people' size={75} color='#ffffff' style={{ margin: 15 }} />
              <Text style={[style.buttonTransactionText]}>Change your full name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonTransaction3} onPress={() => setDeleteVisible(!deleteVisible)}>
              <Icon name='close-sharp' size={75} color={colors.secondaryDark} style={{ margin: 15 }} />
              <Text style={[style.buttonTransactionText2]}>Delete your account</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
