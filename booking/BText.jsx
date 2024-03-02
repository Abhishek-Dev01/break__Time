import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookNow = () => {
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
      
    
  return (
    <TouchableOpacity style={styles.container}>
     
        <Text style={styles.text}>Book Your Hall Now</Text>
        <View style={{marginBottom:50,justifyContent:'center', alignItems:'center'}}>
        <Text style={{top:30,fontSize:14, fontFamily:'opens'}}>Select the fields below to sechudule your</Text>
        <Text style={{top:30,fontSize:14, fontFamily:'opens'}}>Function event</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:20
  },

  text: {
    fontSize: 46,
    color: '#000',
    fontWeight:600,
    textAlign: 'center',
    fontFamily:'cur'
  },
});

export default BookNow;
