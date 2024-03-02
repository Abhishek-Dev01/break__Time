import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Images } from '../config/images';
import { useFonts } from 'expo-font';

const Topview = () => {
  const [loaded] =useFonts ({
    opens: require('../assets/font/open.ttf'),
    openi: require('../assets/font/openi.ttf'),
    pro: require('../assets/font/pro.ttf'),
    poppins: require('../assets/font/poppins.ttf'),
    
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      <Image source={Images.logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Welcome to Breaktime Offical App</Text>
        <Text style={styles.subHeaderText}>Explore and discover our beautiful halls and Foods</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontFamily:'openi',
    
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666666',
  },
});

export default Topview;
