import { useFonts } from 'expo-font';
import React from 'react';
import { Text, Linking, StyleSheet } from 'react-native';

const Three3d = () => {
    const [loaded] =useFonts ({
        opens: require('../assets/font/open.ttf'),
        openi: require('../assets/font/openi.ttf'),
        pro: require('../assets/font/pro.ttf'),
        poppins: require('../assets/font/poppins.ttf'),
        bold: require('../assets/font/bold.ttf'),
        cur: require('../assets/font/dance.ttf'),
        });
        if (!loaded) {
          return null;
        }
      
  const handleLinkPress = () => {
    Linking.openURL('https://my.matterport.com/show/?m=yeZ7xRYU4o1&lang=en');
  };

  return (
    <Text style={styles.text}>
      Checkout our 3D hall view {' '}
      <Text style={styles.link} onPress={handleLinkPress}>
        PRESS ME !!
      </Text>
      .
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 15,
    textAlign:'center',
    fontFamily:'poppins'
  },
  link: {
    color: 'red', // blue color
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Three3d;
