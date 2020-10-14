import { ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Entypo'
import ImageLanding1 from '../../assets/landingIMG/landing1.png'
import ImageLanding2 from '../../assets/landingIMG/landing2.png'
import ImageLanding3 from '../../assets/landingIMG/landing3.png'
import colors from '../../styles/_colors'
import style from './LandingStyle'

const LandingScreen = ({ navigation }: StackScreenProps<ParamListBase>): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Swiper autoplay autoplayTimeout={5}>
        <LinearGradient colors={['#5e88f2', '#3865d5', '#0a41cd']} style={style.container}>
          <View>
            <Text style={style.title}>Frame Wallet</Text>
            <Text style={style.text1}>Your cryptocurrency wallet</Text>
          </View>
          <Image source={ImageLanding2} style={style.image1} />
        </LinearGradient>

        <LinearGradient colors={['#76a626', '#9ee037', '#71a126']} style={style.container}>
          <View>
            <Text style={style.title}>Frame Wallet</Text>
            <Text style={style.text2}>Your cryptocurrency wallet</Text>
          </View>
          <Image source={ImageLanding3} style={style.image2} />
          <Text style={style.introText2}>We take care of your money</Text>
        </LinearGradient>

        <LinearGradient colors={['#E079FB', '#e39ff5', '#ecb8fa']} style={style.container}>
          <View>
            <Text style={style.title}>Frame Wallet</Text>
            <Text style={style.text3}>Your cryptocurrency wallet</Text>
          </View>
          <Image source={ImageLanding1} style={style.image3} />
          <Text style={style.introText3}>and you take care of your dreams</Text>
        </LinearGradient>

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
      </Swiper>
    </SafeAreaView>
  )
}

export default LandingScreen
