import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
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
  const screenWidth = Dimensions.get('window').width

  /* AppFirebase.auth().signOut() */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <ScrollView>
        <LinearGradient colors={['#fff', '#d1dce2']} useAngle={true} angle={250} angleCenter={{ x: 0.3, y: 1 }} style={style.homeContainer}>
          <View style={style.homeHeader}>
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
            <ScrollView horizontal={true} style={{ marginVertical: 40 }}>
              <BarChart
                data={data}
                width={data.labels.length * 45}
                height={350}
                yAxisLabel='$'
                yAxisSuffix=''
                yLabelsOffset={20}
                xLabelsOffset={0}
                showValuesOnTopOfBars={true}
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
