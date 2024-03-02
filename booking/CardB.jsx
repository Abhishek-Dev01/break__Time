import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Images } from '../config/images';

const images = [
  { id: 1, source: Images.e6,text: 'Emerald Hall'  },
  { id: 2, source: Images.s,text: 'Sapphire Hall' },
  { id: 3, source: Images.r,text: 'Ruby Hall' }
];

const BCard = () => {
  return (
    <View style={styles.container}>
       {images.map((image) => (
        <View key={image.id} style={styles.card}>
          <Image source={image.source} style={styles.image} />
          <Text style={styles.text}>{image.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    textAlign:'center',
    fontWeight:'600',
    fontFamily:'opens'
  },
  card: {
    justifyContent:'center',
    alignContent:'center',
    width: '30%',
    height:'60%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
});

export default BCard;
