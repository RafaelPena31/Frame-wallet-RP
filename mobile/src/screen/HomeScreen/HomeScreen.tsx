import auth from '@react-native-firebase/auth'
import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import { TotalValue } from '../../context/TotalValueContext'
import { WalletContext } from '../../context/WalletContext'
import colors from '../../styles/_colors'
import style from './HomeStyle'

const HomeScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { totalValueContext } = useContext(TotalValue)

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

  const [labelData, setLabelData] = useState([''])
  const [numberData, setNumberData] = useState([0])
  useEffect(() => {
    /*     walletValue.forEach(item => {
      setLabelData([...labelData, item.name])
      setNumberData([...numberData, item.realValue])
    })
    console.log(labelData) */
  }, [walletValue])

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
                  <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
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
                  <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
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
                data={{ labels: labelData, datasets: [{ data: numberData }] }}
                width={300}
                height={350}
                yAxisLabel='$'
                yAxisSuffix=''
                yLabelsOffset={20}
                xLabelsOffset={0}
                fromZero
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
