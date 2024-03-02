import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const BookNow = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('book');
  };

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text} onPress={handlePress}  >Book Now </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFEB3B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default BookNow;
