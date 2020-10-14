import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import CryptoBox from '../../components/CryptoBox/CryptoBox'
import colors from '../../styles/_colors'
import style from './WalletStyle'

const WalletScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  /* AppFirebase.auth().signOut() */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <ScrollView>
        <LinearGradient colors={['#fff', '#d1dce2']} useAngle angle={250} angleCenter={{ x: 0.3, y: 1 }} style={style.walletContainer}>
          <View style={style.walletHeader}>
            <Text style={style.textHeader}>Your wallet</Text>
          </View>
          <View style={style.valueContent}>
            <Swiper height={190} style={{ margin: 0 }}>
              <>
                <View style={style.balance}>
                  <Text style={style.textBalance}>Cryptocurrency Balance</Text>
                  <TouchableOpacity>
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
                  <TouchableOpacity>
                    <Text style={style.buttonBalanceText}>Transfer +</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[style.valueText]}>$00.00</Text>
                <View style={style.valueButtonContainer}>
                  <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={[style.valueButtonText]}>Analytics</Text>
                    <Icon name='analytics-outline' size={22} color={colors.secondaryDark} />
                  </TouchableOpacity>
                  <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Transaction')}>
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
          </View>

          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CryptoBox id={5} value={0} quant={1.3} />
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WalletScreen
