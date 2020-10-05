import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 47,
    fontFamily: 'Montserrat-Bold',
    marginTop: 30
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: colors.textSecondary
  },
  image1: {
    maxWidth: 410,
    height: 330,
    marginBottom: 230
  },
  text2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: '#BAEB6C'
  },
  introText2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#FFF',
    marginHorizontal: 33,
    marginBottom: 100
  },
  image2: {
    maxWidth: 350,
    height: 240
  },
  text3: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: '#F0C4FB'
  },
  introText3: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#FFF',
    marginHorizontal: 33,
    textAlign: 'right',
    marginBottom: 100
  },
  image3: {
    maxWidth: 340,
    height: 270
  },
  /* ===================================================================================== */
  iconContainer: {
    width: width,
    alignItems: 'flex-start',
    paddingLeft: 30
  },
  logContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 30
  },
  formContainer: {},
  titleSign: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 60
  },
  signButton: {
    backgroundColor: colors.principal,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 320
  },
  signButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
  },
  descriptionContainer: {
    marginTop: 20,
    marginLeft: 7,
    flexDirection: 'row'
  },
  descriptionText: {},
  logButtonText: {
    fontFamily: 'Montserrat-Bold',
    marginLeft: 10,
    textDecorationLine: 'underline'
  }
})

export default style
