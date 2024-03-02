import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Bookbtn = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('book');
  };

  return (
   <View style={{flex:1, 
    justifyContent:'center',
    alignItems:'center'}}>
   <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Book Now</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B8860B',
    padding: 16,
    borderRadius: 8,
    width:"50%",
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Bookbtn;
