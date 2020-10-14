import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/_colors'
import style from './WalletStyle'

const WalletScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
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
          style={style.walletContainer}>
          <View style={style.walletHeader}>
            <Text style={style.textHeader}>Your account</Text>
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
              <TouchableOpacity style={style.valueButton} onPress={() => navigation.navigate('Transaction')}>
                <Text style={[style.valueButtonText]}>Buy currency</Text>
                <Icon name='card-outline' size={22} color={colors.secondaryDark} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.progressContainer}>
            <Progress.Bar progress={0.73} width={320} color={colors.secondaryMiddle} height={13} style={style.progressBar} />
            <Text style={style.progressLabel}>70% - invested capital</Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WalletScreen
