import { StyleSheet } from 'react-native'
import colors from '../../_colors'

const BuyModalStyle = StyleSheet.create({
  config: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  container: {
    backgroundColor: '#ffffff',
    width: 350,
    minHeight: 400,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  titleModal: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 19,
    color: colors.secondaryDark
  },
  formModal: {
    marginTop: 80
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 25,
    marginBottom: 15
  },
  picker: {
    width: 280
  },
  txtModal: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 25,
    paddingLeft: 10,
    width: 280
  },
  buttonModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  buttonModal: {
    backgroundColor: colors.secondaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    marginVertical: 5,
    borderRadius: 25
  },
  buttonModalText: {
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16
  }
})

export default BuyModalStyle
