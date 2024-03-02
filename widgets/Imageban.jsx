import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import { Images } from '../config/images';
import FoodCard from '../components/FoodCard';
import Bread from '../components/Bread';

import Soup from '../components/Soup';
import AChap from './Chap';
import Noodles from './Noodle';

const Imageban = () => {
  return (
    <ImageBackground source={Images.logo} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <FoodCard />
        <Bread />
        <Soup />
        <AChap />
        <Noodles />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Imageban;
