import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,  StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Button = () => {
  const Zomato = () => {
    // Redirect to Zomato app or website
    Linking.openURL('https://www.zomato.com/ncr/break-time-nit-faridabad/order');
  };
  const navigation = useNavigation();

  const SBook = () => {
    navigation.navigate('book');
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={Zomato}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={SBook}>Book Table</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 0
  },
  button: {
    backgroundColor: '#B8860B',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default Button;
