import { Picker } from '@react-native-community/picker'
import auth from '@react-native-firebase/auth'
import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useState } from 'react'
import {
  Alert,
  LogBox,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import api from '../../api/api'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import CryptoBox from '../../components/CryptoBox/CryptoBox'
import { TotalValue } from '../../context/TotalValueContext'
import { UserContext } from '../../context/UserContext'
import { WalletContext } from '../../context/WalletContext'
import BuyModalStyle from '../../styles/componentStyle/Modals/BuyModalStyle'
import colors from '../../styles/_colors'
import style from './TransactionStyle'

LogBox.ignoreLogs(['Setting a timer'])

const TransactionScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  const [modalVisibleCrypto, setModalVisibleCrypto] = useState<boolean>(false)
  const [modalVisibleCapital, setModalVisibleCapital] = useState<boolean>(false)
  const [currencyValue, setCurrencyValue] = useState<string>('0')
  const [currencyId, setCurrencyId] = useState<number>(0)

  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { totalValueContext, setTotalValueContext } = useContext(TotalValue)
  const { currencyUserApp } = useContext(UserContext)

  async function BuyCurrency() {
    if (parseFloat(currencyValue) !== 0 && currencyValue !== '') {
      const { name } = currencyArray[currencyId]
      const walletIndex = walletValue.findIndex(item => item.name === name)
      if (walletIndex === -1) {
        api.put('walletAdd', {
          uid: currencyUserApp,
          coins: [
            ...walletValue,
            {
              id: currencyId,
              name: currencyArray[currencyId].name,
              value: parseFloat(currencyValue),
              realValue: parseFloat((parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2))
            }
          ],
          totalValue: parseFloat((totalValueContext + parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2))
        })
        setWalletValue([
          ...walletValue,
          {
            id: currencyId,
            name: currencyArray[currencyId].name,
            value: parseFloat(currencyValue),
            realValue: parseFloat((parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2))
          }
        ])
        setTotalValueContext(parseFloat((totalValueContext + parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2)))
      } else {
        api.put('walletAdd', {
          uid: currencyUserApp,
          coins: [
            ...walletValue.filter(item => item.name !== walletValue[walletIndex].name),
            {
              name: walletValue[walletIndex].name,
              value: walletValue[walletIndex].value + parseFloat(currencyValue),
              realValue: parseFloat(
                (walletValue[walletIndex].realValue + parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2)
              ),
              id: walletValue[walletIndex].id
            }
          ],
          totalValue: parseFloat((totalValueContext + parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2))
        })
        setWalletValue([
          {
            name: walletValue[walletIndex].name,
            value: walletValue[walletIndex].value + parseFloat(currencyValue),
            realValue: parseFloat(
              (walletValue[walletIndex].realValue + parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2)
            ),
            id: walletValue[walletIndex].id
          },
          ...walletValue.filter(item => item.name !== walletValue[walletIndex].name)
        ])
      }
      setTotalValueContext(parseFloat((totalValueContext + parseFloat(currencyValue) * currencyArray[currencyId].price).toFixed(2)))
    } else {
      Alert.alert('Invalid value')
      setCurrencyId(0)
      setCurrencyValue('0')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />

      {/* Modais */}

      {/* Crypto */}

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
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={BuyCurrency}>
                <Text style={BuyModalStyle.buttonModalText}>Buy</Text>
              </TouchableHighlight>
              <TouchableHighlight style={BuyModalStyle.buttonModal} onPress={() => setModalVisibleCrypto(!modalVisibleCrypto)}>
                <Text style={BuyModalStyle.buttonModalText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Crypto */}

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
                <Text style={BuyModalStyle.buttonModalText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Capital */}

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
            <TouchableHighlight onPress={() => auth().signOut()} style={style.iconOut}>
              <Icon name='exit-outline' size={30} color={colors.secondaryDark} />
            </TouchableHighlight>
          </View>

          <View style={style.valueContent}>
            <Swiper height={120} style={{ margin: 0 }}>
              <>
                <View style={style.balance}>
                  <Text style={style.textBalance}>Cryptocurrency Balance</Text>
                  <TouchableOpacity onPress={() => setModalVisibleCrypto(!modalVisibleCrypto)}>
                    <Text style={style.buttonBalanceText}>Add +</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[style.valueText]}>
                  {totalValueContext.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}
                </Text>
              </>
              <>
                <View style={style.balance}>
                  <Text style={style.textBalance}>Invested Capital Balance</Text>
                  <TouchableOpacity onPress={() => setModalVisibleCapital(!modalVisibleCapital)}>
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
              <TouchableOpacity style={style.buttonTransaction} onPress={() => setModalVisibleCrypto(!modalVisibleCrypto)}>
                <Icon name='contrast-outline' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Buy cryptocurrencies</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonTransaction} onPress={() => setModalVisibleCapital(!modalVisibleCapital)}>
                <Icon name='card' size={75} color='#ffffff' />
                <Text style={[style.buttonTransactionText]}>Add capital to invest</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.buttonTransaction2} onPress={() => navigation.navigate('Wallet')}>
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
              <TouchableOpacity
                key={currency.sigla}
                onPress={() => {
                  setModalVisibleCrypto(!modalVisibleCrypto)
                  setCurrencyId(index)
                }}>
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
