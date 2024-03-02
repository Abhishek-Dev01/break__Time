import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Images } from '../config/images';

export default function Servicebn() {
  return (
    <ImageBackground source={Images.emerald} style={styles.image}>
      <View style={styles.overlay}>  
      <Text style={{flex:1,fontSize:34, 
        textAlign: 'center', padding:30, 
        color:'#fff', fontFamily:'bold'}}
        >Our Services</Text>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});
