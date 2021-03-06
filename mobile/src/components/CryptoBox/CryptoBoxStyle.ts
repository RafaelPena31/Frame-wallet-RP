import { StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const style = StyleSheet.create({
  cryptoContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
    paddingVertical: 7,
    paddingHorizontal: 4,
    borderColor: '#D3D3D323',
    borderTopWidth: 1
  },
  iconContainer: {
    paddingVertical: 4,
    paddingRight: 4
  },
  icon: {
    width: 30,
    height: 30.4
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
    flexDirection: 'row',
    position: 'absolute',
    right: 0
  },
  textValue: {
    fontFamily: 'Roboto-Regular',
    color: colors.secondaryDark
  },
  textQuant: {
    fontFamily: 'Roboto-Regular',
    color: `${colors.secondaryDark}90`
  },
  textDivider: {
    fontFamily: 'Roboto-Regular',
    color: colors.secondaryLight,
    marginHorizontal: 15
  }
})

export default style
