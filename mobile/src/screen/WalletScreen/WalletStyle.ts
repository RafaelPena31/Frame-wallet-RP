import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
  walletContainer: {
    minHeight: height,
    paddingHorizontal: 30
  },
  walletHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 25
  },
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.secondaryDark
  },
  valueContent: {},
  balance: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textBalance: {
    fontFamily: 'Montserrat-Regular',
    color: colors.textSecondary
  },
  buttonBalanceText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: colors.secondaryNeon
  },
  valueText: {
    fontSize: 47,
    fontFamily: 'Roboto-Regular',
    color: colors.secondaryDark
  },
  valueButtonContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  valueButton: {
    paddingHorizontal: 23,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valueButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.secondaryDark,
    marginRight: 8
  },
  progressContainer: {
    marginVertical: 10
  },
  progressBar: {
    borderRadius: 20
  },
  progressLabel: {
    marginBottom: 8,
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
    color: colors.secondaryLight
  },
  dividerContainer: {
    width: 330,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  dividerText: {
    color: colors.secondaryDark + '50',
    fontFamily: 'Montserrat-Light',
    marginBottom: 8
  }
})

export default style
