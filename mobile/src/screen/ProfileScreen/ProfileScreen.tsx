import firestore from '@react-native-firebase/firestore'
import React, { useContext, useState } from 'react'
import { Modal, SafeAreaView, StatusBar, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/Ionicons'
import { TotalValue } from '../../context/TotalValueContext'
import { UserContext } from '../../context/UserContext'
import BuyModalStyle from '../../styles/componentStyle/Modals/BuyModalStyle'
import colors from '../../styles/_colors'
import style from './ProfileStyle'

const ProfileScreen = (/* { navigation }: StackScreenProps<ParamListBase> */): JSX.Element => {
  /* AppFirebase.auth().signOut() */
  const { Bar } = Progress
  const [emailVisible, setEmailVisible] = useState<boolean>(false)
  const [emailValue, setEmailValue] = useState<string>('')
  const [passVisible, setPassVisible] = useState<boolean>(false)
  const [passValue, setPassValue] = useState<string>('')
  const [nameVisible, setNameVisible] = useState<boolean>(false)
  const [nameValue, setNameValue] = useState<string>('')
  const { totalValueContext, setTotalValueContext } = useContext(TotalValue)
  const { currencyUserApp } = useContext(UserContext)

  firestore()
    .collection('wallets')
    .doc(currencyUserApp)
    .onSnapshot(doc => {
      const arrayCollection = doc.data()
      if (arrayCollection !== undefined) {
        const walletDataTotal: number = arrayCollection.totalValue
        setTotalValueContext(walletDataTotal)
        console.log(totalValueContext)
      }
    })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Modais */}

      {/* Email */}

      <Modal animationType='fade' transparent={true} visible={emailVisible} statusBarTranslucent style={BuyModalStyle.config}>
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
              <View style={BuyModalStyle.buttonModalContainer}></View>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setEmailVisible(!emailVisible)}>
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

      <Modal animationType='fade' transparent={true} visible={passVisible} statusBarTranslucent style={BuyModalStyle.config}>
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
              <View style={BuyModalStyle.buttonModalContainer}></View>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setPassVisible(!passVisible)}>
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

      <Modal animationType='fade' transparent={true} visible={nameVisible} statusBarTranslucent style={BuyModalStyle.config}>
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
                onChangeText={e => setNameValue(e)}
                value={nameValue}
              />
              <View style={BuyModalStyle.buttonModalContainer}></View>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setNameVisible(!nameVisible)}>
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
            <Text style={style.textTitleHeader}>Rafael Pena</Text>
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
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
