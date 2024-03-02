import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, Title, Paragraph } from 'react-native-paper';
import { Images } from '../config/images';
import { ScrollView } from "react-native-gesture-handler";


const FoodCard = () => {
    return (
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Image
                source={Images.dal}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Dal Makhni</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={Images.shahi}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Shahi Paneer</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={Images.veg}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Mix Veg</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={Images.kadai}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Kadai Paneer</Text>
            </View>
    
          </ScrollView>
    
          </View>
        
      );
  };
  
export default FoodCard

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginBottom: 20,
  },
  container1:{
    height: 150,
    marginBottom: 20,
  },
  card: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

  