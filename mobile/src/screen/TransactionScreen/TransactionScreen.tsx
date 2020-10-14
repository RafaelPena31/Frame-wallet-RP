import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import CryptoBox from '../../components/CryptoBox/CryptoBox'
import colors from '../../styles/_colors'
import style from './TransactionStyle'

const TransactionScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  /* AppFirebase.auth().signOut() */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <ScrollView>
        <LinearGradient
          colors={['#fff', '#d1dce2']}
          useAngle={true}
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
                  <TouchableOpacity>
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
          </View>
          {currencyArray.map((currency, index) => {
            return (
              <TouchableOpacity key={index}>
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
