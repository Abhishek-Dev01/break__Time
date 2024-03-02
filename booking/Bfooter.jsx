import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BFooter = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Follow Us:</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => handleLinkPress('https://wa.me/<7065585050>')}>
          <FontAwesome name="whatsapp" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <View style={styles.iconSpacer} />
        <TouchableOpacity onPress={() => handleLinkPress('https://www.facebook.com/sarabjeet.singh.520357/')}>
          <FontAwesome name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
        <View style={styles.iconSpacer} />
        <TouchableOpacity onPress={() => handleLinkPress('https://www.instagram.com/breaktime_banquets/')}>
          <FontAwesome name="instagram" size={24} color="#E1306C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  iconSpacer: {
    width: 80,
  },
});

export default BFooter;
