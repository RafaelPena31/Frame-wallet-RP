import { StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const style = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 30
  },
  profileHeader: {
    position: 'relative',
    backgroundColor: colors.secondaryDark,
    alignItems: 'center',
    height: 250,
    padding: 30
  },
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#ffffff'
  },
  titleContent: {
    position: 'absolute',
    left: 0,
    marginTop: 135,
    marginLeft: 30
  },
  textLabelHeader: {
    color: '#ffffff70',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20
  },
  textTitleHeader: {
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16
  },
  valueContent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginHorizontal: 30,
    marginVertical: 20
  },
  textValueLabelHeader: {
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    textAlign: 'right'
  },
  textValueHeader: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    textAlign: 'right'
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 10,
    borderRadius: 10
  },
  logoText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#ffffff',
    marginLeft: 20
  },
  buttonContentTransaction: {
    marginTop: 40,
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
    borderRadius: 20,
    marginBottom: 20
  },
  buttonTransaction3: {
    borderColor: colors.secondaryDark,
    borderWidth: 4,
    width: 334,
    height: 115,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20
  },
  buttonTransactionText: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 155
  },
  buttonTransactionText2: {
    color: colors.secondaryDark,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 155
  },
  infoContent: {
    marginTop: 30
  },
  infoUnit: {
    marginVertical: 10,
    flexDirection: 'row',

    alignItems: 'center'
  },
  infoLabel: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.secondaryDark,
    marginRight: 10
  },
  infoText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    maxWidth: 255
  },
  dividerContainer: {
    width: 330,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  dividerText: {
    color: `${colors.secondaryDark}80`,
    fontFamily: 'Montserrat-Light'
  }
})

export default style
