import { Picker } from '@react-native-community/picker'
import auth from '@react-native-firebase/auth'
import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Modal, SafeAreaView, StatusBar, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import api from '../../api/api'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import { TotalValue } from '../../context/TotalValueContext'
import { UserContext } from '../../context/UserContext'
import { WalletContext } from '../../context/WalletContext'
import BuyModalStyle from '../../styles/componentStyle/Modals/BuyModalStyle'
import colors from '../../styles/_colors'
import style from './HomeStyle'

const HomeScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  const data = {
    labels: [
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether',
      'XRP',
      'Bitcoin',
      'Ethereum',
      'Tether'
    ],
    datasets: [
      {
        data: [
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          100,
          20000,
          12000,
          5000,
          100
        ]
      }
    ]
  }
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: () => colors.secondaryLight,
    labelColor: () => colors.secondaryDark,
    strokeWidth: 5, // optional, default 3
    barPercentage: 1
  }
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
      console.log(walletIndex)
      if (walletIndex === -1) {
        setWalletValue([
          ...walletValue,
          {
            id: currencyId,
            name: currencyArray[currencyId].name,
            value: parseFloat(currencyValue),
            realValue: parseFloat(currencyValue) * currencyArray[currencyId].price
          }
        ])
      } else {
        console.log('ue')
        setWalletValue([
          {
            name: walletValue[walletIndex].name,
            value: walletValue[walletIndex].value + parseFloat(currencyValue),
            realValue: walletValue[walletIndex].realValue + parseFloat(currencyValue) * currencyArray[currencyId].price,
            id: walletValue[walletIndex].id
          },
          ...walletValue.filter(item => item.name !== walletValue[walletIndex].name)
        ])
      }
    } else {
      Alert.alert('Invalid value')
      setCurrencyId(0)
      setCurrencyValue('')
    }
  }

  useEffect(() => {
    setTotalValueContext(totalValueContext + parseFloat(currencyValue) * currencyArray[currencyId].price)
    api.put('walletAdd', {
      uid: currencyUserApp,
      coins: walletValue,
      totalValue: totalValueContext + parseFloat(currencyValue) * currencyArray[currencyId].price
    })
    console.log(parseFloat(currencyValue) + totalValueContext)
    console.log(walletValue, totalValueContext)
  }, [walletValue, setTotalValueContext])

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      <StatusBar hidden />
      <ScrollView>
        <LinearGradient colors={['#fcfcfc', '#d1dce2']} useAngle angle={250} angleCenter={{ x: 0.3, y: 1 }} style={style.homeContainer}>
          <View style={style.homeHeader}>
            <Text style={style.textHeader}>Your account</Text>
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
              <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Wallet')}>
                <Text style={[style.valueButtonText]}>Open wallet</Text>
                <Icon name='wallet-outline' size={22} color={colors.secondaryDark} />
              </TouchableOpacity>
              <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Transaction')}>
                <Text style={[style.valueButtonText]}>Buy currency</Text>
                <Icon name='contrast-outline' size={22} color={colors.secondaryDark} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.progressContainer}>
            <Progress.Bar progress={0.73} width={320} color={colors.secondaryMiddle} height={13} style={style.progressBar} />
            <Text style={style.progressLabel}>70% - invested capital</Text>
            <View style={style.dividerContainer}>
              <Text style={style.dividerText}> ─ Analytics ────────</Text>
              <Icon name='arrow-down-outline' size={25} color={colors.secondaryDark} />
            </View>
            <ScrollView horizontal style={{ marginVertical: 20 }}>
              <BarChart
                data={data}
                width={data.labels.length * 45}
                height={350}
                yAxisLabel='$'
                yAxisSuffix=''
                yLabelsOffset={20}
                xLabelsOffset={0}
                showValuesOnTopOfBars
                chartConfig={chartConfig}
                verticalLabelRotation={90}
                horizontalLabelRotation={0}
              />
            </ScrollView>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
