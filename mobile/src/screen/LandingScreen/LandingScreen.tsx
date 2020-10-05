import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'
import colors from '../../styles/_colors'
import style from './LandingStyle'

const LandingScreen = ({ navigation }: StackScreenProps<ParamListBase>) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} horizontal={true} scrollEventThrottle={16} pagingEnabled={true}>
        <View style={style.container1}>
          <View>
            <Text style={style.title}>Frame Wallet</Text>
            <Text style={style.text1}>Your cryptocurrency wallet</Text>
          </View>
          <Image source={require('../../assets/landing1.png')} style={style.image1} />
          <TouchableOpacity style={style.nextButton1}>
            <Icon name='chevron-right' size={55} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={style.container2}>
          <View>
            <Text style={style.title}>Frame Wallet</Text>
            <Text style={style.text2}>Your cryptocurrency wallet</Text>
          </View>
          <Image source={require('../../assets/landing3.png')} style={style.image2} />
          <Text style={style.introText2}>We take care of your money</Text>
          <TouchableOpacity style={style.nextButton2}>
            <Icon name='chevron-right' size={55} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={style.container3}>
          <View>
            <Text style={style.title}>Frame Wallet</Text>
            <Text style={style.text3}>Your cryptocurrency wallet</Text>
          </View>
          <Image source={require('../../assets/landing2.png')} style={style.image3} />
          <Text style={style.introText3}>and you take care of your dreams</Text>
          <TouchableOpacity style={style.nextButton3}>
            <Icon name='chevron-right' size={55} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={style.logContainer}>
          <View style={style.iconContainer}>
            <Icon name='wallet' size={80} color={colors.secondaryMiddle} />
          </View>
          <Text style={style.titleSign}>Start making money with us</Text>
          <View style={style.formContainer}>
            <TouchableOpacity style={style.signButton} onPress={() => navigation.navigate('SignUp')}>
              <Text style={style.signButtonText}> Sign UP </Text>
            </TouchableOpacity>
            <View style={style.descriptionContainer}>
              <Text style={style.descriptionText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={style.logButtonText}>Sign in here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LandingScreen
