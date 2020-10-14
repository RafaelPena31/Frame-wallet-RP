import React from 'react'
import { Image, Text, View } from 'react-native'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import style from './CryptoBoxStyle'

function CryptoBox() {
  return (
    <View style={style.cryptoContainer}>
      <View style={style.iconContainer}>
        <Image source={currencyArray[5].iconSet} style={style.icon} />
      </View>
      <View style={style.coinContainer}>
        <Text style={style.coinTextSigla}>BTC</Text>
        <Text style={style.coinTextTitle}>Bitcoin</Text>
      </View>
      <View style={style.valueContainer}>
        <Text style={style.textValue}>$00.00</Text>
      </View>
    </View>
  )
}

export default CryptoBox
