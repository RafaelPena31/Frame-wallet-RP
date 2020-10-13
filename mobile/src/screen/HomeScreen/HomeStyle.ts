import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
  homeContainer: {
    minHeight: height,
    paddingHorizontal: 30
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20
  },
  textHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.secondaryDark,
    marginHorizontal: 33,
    textAlign: 'right',
    marginBottom: 100
  },
  valueContent: {},
  balance: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  valueButtonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  valueButton: {},
  progressContainer: {},
  progressBar: {
    borderRadius: 20
  },
  progressLabel: {
    marginBottom: 15
  }
})

export default style
