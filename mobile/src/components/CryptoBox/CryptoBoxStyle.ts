import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
  cryptoContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
    paddingVertical: 7,
    borderColor: 'rgba(0,0,55,0.08)',
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  iconContainer: {
    paddingVertical: 4,
    paddingRight: 4
  },
  icon: {
    width: 30,
    height: 30
  },
  coinContainer: {
    marginLeft: 15,
    marginRight: 107,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  coinTextSigla: {
    marginRight: 12,
    fontFamily: 'Roboto-Bold',
    fontSize: 10,
    color: colors.textSecondary
  },
  coinTextTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.secondaryDark
  },
  valueContainer: {
    position: 'absolute',
    right: 0
  }
})

export default style
