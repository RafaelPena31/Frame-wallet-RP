import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const style = StyleSheet.create({
  headerContainer: {
    alignItems: 'flex-start',
    padding: 30
  }
})

export default style
