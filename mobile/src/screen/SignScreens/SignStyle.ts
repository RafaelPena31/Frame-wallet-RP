import { StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const style = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 40
  },
  logoTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    color: colors.secondaryMiddle,
    marginLeft: 10
  },
  formContainer: {
    padding: 37,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  input: {
    width: 315,
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 5,
    paddingLeft: 10
  },
  button: {
    backgroundColor: colors.principal,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 315,
    marginTop: 50
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
  }
})

export default style
