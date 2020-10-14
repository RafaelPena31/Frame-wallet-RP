import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../styles/_colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
  profileContainer: {
    minHeight: height,
    paddingHorizontal: 30
  },
  profileHeader: {
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
