import React from 'react'
import { Image, Text, View } from 'react-native'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import style from './CryptoBoxStyle'

interface CurrencyControler {
  id: number
  value: number
  quant?: number
}

function CryptoBox({ id, value, quant }: CurrencyControler) {
  return (
    <View style={style.cryptoContainer}>
      <View style={style.iconContainer}>
        <Image source={currencyArray[id].iconSet} style={style.icon} />
      </View>
      <View style={style.coinContainer}>
        <Text style={style.coinTextSigla}>{currencyArray[id].sigla}</Text>
        <Text style={style.coinTextTitle}>{currencyArray[id].name}</Text>
      </View>
      <View style={style.valueContainer}>
        <Text style={style.textQuant}>{quant}</Text>
        {quant !== undefined ? (
          <>
            <Text style={style.textDivider}>|</Text>
            <Text style={style.textValue}>{value.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}</Text>
          </>
        ) : (
          <Text style={style.textValue}>{value.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}</Text>
        )}
      </View>
    </View>
  )
}

export default CryptoBox
