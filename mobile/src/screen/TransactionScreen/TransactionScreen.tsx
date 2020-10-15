import { Picker } from '@react-native-community/picker'
import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Modal, SafeAreaView, StatusBar, Text, TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import CryptoBox from '../../components/CryptoBox/CryptoBox'
import BuyModalStyle from '../../styles/componentStyle/Modals/BuyModalStyle'
import colors from '../../styles/_colors'
import style from './TransactionStyle'

const TransactionScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [currencyValue, setCurrencyValue] = useState<number>(0)
  const [currencyId, setCurrencyId] = useState<number>(0)
  const [pickerValue, setPickerValue] = useState<number>(0)
  /* AppFirebase.auth().signOut() */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />

      {/* Modais */}

      <Modal animationType='fade' transparent={true} visible={modalVisible} statusBarTranslucent style={BuyModalStyle.config}>
        <SafeAreaView style={BuyModalStyle.centeredView}>
          <View style={BuyModalStyle.container}>
            <Text>Buy Cryptocurrencies</Text>
            <View style={BuyModalStyle.formModal}>
              <Picker
                selectedValue={pickerValue}
                onValueChange={e => setCurrencyValue(parseInt(e.toString()))}
                style={BuyModalStyle.picker}>
                <Picker.Item label='Bitcoin' value={0} />
              </Picker>
              <TextInput placeholder='Value to buy' />
              <View style={BuyModalStyle.buttonModalContainer}>
                <TouchableOpacity style={BuyModalStyle.buttonModal}>
                  <Text>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={BuyModalStyle.buttonModal} onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Cancel Transaction</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Modais */}

      <ScrollView>
        <LinearGradient
          colors={['#fcfcfc', '#d1dce2']}
          useAngle
          angle={250}
          angleCenter={{ x: 0.3, y: 1 }}
          style={style.transactionContainer}>
          <View style={style.transactionHeader}>
            <Text style={style.textHeader}>Transactions</Text>
          </View>

          <View style={style.valueContent}>
            <Swiper height={120} style={{ margin: 0 }}>
              <>
                <View style={style.balance}>
                  <Text style={style.textBalance}>Cryptocurrency Balance</Text>
                  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={style.buttonBalanceText}>Add +</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[style.valueText]}>$00.00</Text>
              </>
              <>
                <View style={style.balance}>
                  <Text style={style.textBalance}>Invested Capital Balance</Text>
                  <TouchableOpacity>
                    <Text style={style.buttonBalanceText}>Add +</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[style.valueText]}>$00.00</Text>
              </>
            </Swiper>
            <View style={style.valueButtonContainer}>
              <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Home')}>
                <Text style={[style.valueButtonText]}>Analytics</Text>
                <Icon name='analytics-outline' size={22} color={colors.secondaryDark} />
              </TouchableOpacity>
              <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Wallet')}>
                <Text style={[style.valueButtonText]}>Open wallet</Text>
                <Icon name='wallet-outline' size={22} color={colors.secondaryDark} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={style.buttonContentTransaction}>
              <TouchableOpacity style={style.buttonTransaction}>
                <Icon name='contrast-outline' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Buy cryptocurrencies</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonTransaction}>
                <Icon name='card' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Add capital to invest</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.buttonTransaction2}>
              <Icon name='card' size={75} color='#ffffff' style={{ margin: 15 }} />
              <Text style={[style.buttonTransactionText]}>View details of your investments</Text>
            </TouchableOpacity>
          </View>
          <View style={style.dividerContainer}>
            <Text style={style.dividerText}> ─ All currencies ────────</Text>
            <Icon name='arrow-down-outline' size={25} color={colors.secondaryDark} />
          </View>
          {currencyArray.map((currency, index) => {
            return (
              <TouchableOpacity key={currency.sigla}>
                <CryptoBox id={index} value={currency.price} />
              </TouchableOpacity>
            )
          })}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TransactionScreen
