import { Picker } from '@react-native-community/picker'
import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Modal, SafeAreaView, StatusBar, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import CryptoBox from '../../components/CryptoBox/CryptoBox'
import { AppFirebase } from '../../config/AppFirebase'
import BuyModalStyle from '../../styles/componentStyle/Modals/BuyModalStyle'
import colors from '../../styles/_colors'
import style from './WalletStyle'

const WalletScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  const [modalVisibleCrypto, setModalVisibleCrypto] = useState<boolean>(false)
  const [modalVisibleSell, setModalVisibleSell] = useState<boolean>(false)
  const [modalVisibleCapital, setModalVisibleCapital] = useState<boolean>(false)
  const [currencyValue, setCurrencyValue] = useState<string>('')
  const [currencyId, setCurrencyId] = useState<number>(0)
  /* AppFirebase.auth().signOut() */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Modais */}

      {/* CryptoBuy */}

      <Modal animationType='fade' transparent={true} visible={modalVisibleCrypto} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text style={BuyModalStyle.titleModal}>Buy Cryptocurrencies</Text>
            <View style={BuyModalStyle.formModal}>
              <View style={BuyModalStyle.pickerContainer}>
                <Picker selectedValue={currencyId} onValueChange={e => setCurrencyId(parseInt(e.toString()))} style={BuyModalStyle.picker}>
                  {currencyArray.map((item, index) => {
                    return <Picker.Item label={item.name} key={item.sigla} value={index} />
                  })}
                </Picker>
              </View>

              <TextInput
                placeholder='Value to buy'
                style={BuyModalStyle.txtModal}
                keyboardType='numeric'
                onChangeText={e => setCurrencyValue(e)}
                value={currencyValue}
              />
              <View style={BuyModalStyle.buttonModalContainer}></View>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setModalVisibleCrypto(!modalVisibleCrypto)}>
                <Text style={BuyModalStyle.buttonModalText}>Buy</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setModalVisibleCrypto(!modalVisibleCrypto)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel Transaction</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* CryptoBuy */}

      {/* CryptoSell */}

      <Modal animationType='fade' transparent={true} visible={modalVisibleSell} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text style={BuyModalStyle.titleModal}>Sell your Cryptocurrencies</Text>
            <View style={BuyModalStyle.formModal}>
              <View style={BuyModalStyle.pickerContainer}>
                <Picker selectedValue={currencyId} onValueChange={e => setCurrencyId(parseInt(e.toString()))} style={BuyModalStyle.picker}>
                  {currencyArray.map((item, index) => {
                    return <Picker.Item label={item.name} key={item.sigla} value={index} />
                  })}
                </Picker>
              </View>

              <TextInput
                placeholder='Value to sell'
                style={BuyModalStyle.txtModal}
                keyboardType='numeric'
                onChangeText={e => setCurrencyValue(e)}
                value={currencyValue}
              />
              <View style={BuyModalStyle.buttonModalContainer}></View>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setModalVisibleSell(!modalVisibleSell)}>
                <Text style={BuyModalStyle.buttonModalText}>Sell</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setModalVisibleSell(!modalVisibleSell)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel Transaction</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* CryptoSell */}

      {/* Capital */}

      <Modal animationType='fade' transparent={true} visible={modalVisibleCapital} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text style={BuyModalStyle.titleModal}>Add new capital to investe</Text>
            <View style={BuyModalStyle.formModal}>
              <TextInput
                placeholder='Capital value'
                style={BuyModalStyle.txtModal}
                keyboardType='numeric'
                onChangeText={e => setCurrencyValue(e)}
                value={currencyValue}
              />
              <View style={BuyModalStyle.buttonModalContainer}></View>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setModalVisibleCapital(!modalVisibleCapital)}>
                <Text style={BuyModalStyle.buttonModalText}>Add capital</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setModalVisibleCapital(!modalVisibleCapital)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel Transaction</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Capital */}

      {/* Modais */}

      <StatusBar hidden />
      <ScrollView>
        <LinearGradient colors={['#fcfcfc', '#d1dce2']} useAngle angle={250} angleCenter={{ x: 0.3, y: 1 }} style={style.walletContainer}>
          <View style={style.walletHeader}>
            <Text style={style.textHeader}>Your wallet</Text>
            <TouchableHighlight onPress={() => AppFirebase.auth().signOut()} style={style.iconOut}>
              <Icon name='exit-outline' size={30} color={colors.secondaryDark} />
            </TouchableHighlight>
          </View>
          <View style={style.valueContent}>
            <Swiper height={190} style={{ margin: 0 }}>
              <>
                <View style={style.balance}>
                  <Text style={style.textBalance}>Cryptocurrency Balance</Text>
                  <TouchableOpacity onPress={() => setModalVisibleCrypto(!modalVisibleCrypto)}>
                    <Text style={style.buttonBalanceText}>Add +</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[style.valueText]}>$00.00</Text>
                <View style={style.valueButtonContainer}>
                  <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={[style.valueButtonText]}>Analytics</Text>
                    <Icon name='analytics-outline' size={22} color={colors.secondaryDark} />
                  </TouchableOpacity>
                  <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Transaction')}>
                    <Text style={[style.valueButtonText]}>Buy currency</Text>
                    <Icon name='contrast-outline' size={22} color={colors.secondaryDark} />
                  </TouchableOpacity>
                </View>
              </>
              <>
                <View style={style.balance}>
                  <Text style={style.textBalance}>Invested Capital Balance</Text>
                  <TouchableOpacity onPress={() => setModalVisibleCapital(!modalVisibleCapital)}>
                    <Text style={style.buttonBalanceText}>Transfer +</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[style.valueText]}>$00.00</Text>
                <View style={style.valueButtonContainer}>
                  <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={[style.valueButtonText]}>Analytics</Text>
                    <Icon name='analytics-outline' size={22} color={colors.secondaryDark} />
                  </TouchableOpacity>
                  <TouchableOpacity style={style.valueButton} onPress={() => setModalVisibleCapital(!modalVisibleCapital)}>
                    <Text style={[style.valueButtonText]}>Add capital</Text>
                    <Icon name='card-outline' size={22} color={colors.secondaryDark} />
                  </TouchableOpacity>
                </View>
              </>
            </Swiper>
          </View>

          <View style={style.progressContainer}>
            <Progress.Bar progress={0.73} width={334} color={colors.secondaryMiddle} height={13} style={style.progressBar} />
            <Text style={style.progressLabel}>70% - invested capital</Text>
          </View>
          <View style={style.dividerContainer}>
            <Text style={style.dividerText}> ─ Your currencies ────────</Text>
            <Icon name='arrow-down-outline' size={25} color={colors.secondaryDark} />
          </View>

          <TouchableOpacity onPress={() => setModalVisibleSell(!modalVisibleSell)}>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WalletScreen
