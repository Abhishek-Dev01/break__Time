import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Images } from '../config/images';

const Rslider = () => {
  return (
    <View style={styles.card}>
      <Image source={Images.r7} style={styles.cardImage} />
      <Text style={styles.cardText}>Ruby Hall</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    textAlign:'center'
  },
});

export default Rslider;
