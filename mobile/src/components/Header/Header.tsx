import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../../styles/_colors'
import style from './HeaderStyle'

const Header = ({ navigation }: StackScreenProps<ParamListBase>) => {
  return (
    <View style={style.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
        <Icon name='arrowleft' size={40} color={colors.secondaryDark} />
      </TouchableOpacity>
    </View>
  )
}

export default Header
