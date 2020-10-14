import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const { height } = Dimensions.get('window')

const style = StyleSheet.create({
  transactionContainer: {
    minHeight: height - 30,
    paddingHorizontal: 30
  },
  transactionHeader: {
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
    marginBottom: 15,
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
    color: colors.secondaryLight
  },
  buttonContentTransaction: {
    marginTop: 75,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonTransaction: {
    backgroundColor: colors.secondaryDark,
    width: 157,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  buttonTransaction2: {
    backgroundColor: colors.secondaryDark,
    width: 334,
    height: 115,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  buttonTransactionText: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 155
  },
  dividerContainer: {
    width: 330,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  dividerText: {
    color: `${colors.secondaryDark}80`,
    fontFamily: 'Montserrat-Light',
    marginBottom: 8
  }
})

export default style
