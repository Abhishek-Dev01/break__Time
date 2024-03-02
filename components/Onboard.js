import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Images} from '../config/images';

const { width, height } = Dimensions.get('window');

export default class Onboarding extends React.Component {
   render() 
     {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={Images.emerald}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={Images.pic1}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={Images.pic2}
              style={styles.image}
            />
          </View>
        </Swiper>

        <View style={styles.textContainer}>
          
        <View style={styles.titleContaine}>
        <Image source={Images.logo} style={{height:100, width:100}} />
           </View>
          <View style={styles.titleContainer}>
          <Text style={styles.title}>BREAK TIME.</Text>
           </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subtitle}>RESTAURNT & BANQUET HALL.</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.signupContainer}>
              <Text style={styles.signup}>Let's Go</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width,
    height: height,

  },
  textContainer: {
    position: 'absolute',
    bottom: 200,
    marginLeft: 20,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  titleContainer: {
    width: 250,
    height: 70,
    right:0,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  titleContaine: {
    width: 150,
    height: 70,
    right:0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    
    fontSize: 30,
    color: '#FFFFFF'
  },
  subTitleContainer: {
    width: 200,
    height: 50,
    backgroundColor: '#28a745',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {

    fontSize: 18,
    color: '#FFFFFF'
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signup: {

    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6'
  },
  loginContainer: {
    width: 180,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 2
  },
  login: {

    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6'
  }
});
