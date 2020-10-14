import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const { height } = Dimensions.get('window')

const style = StyleSheet.create({
  profileContainer: {
    minHeight: height,
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
  }
})

export default style
