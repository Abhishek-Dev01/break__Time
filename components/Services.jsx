import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, Title, Paragraph } from 'react-native-paper';
import { Images } from '../config/images';
import { ScrollView } from "react-native-gesture-handler";


export const Services = () => {
    return (
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Image
                source={Images.weding}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Wedding</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={Images.engage}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Engagement</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={Images.fam}
                style={styles.cardImage}
                resizeMode="cover" 
              />
              <Text style={styles.cardTitle}>Family Function</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={Images.birth}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Birthday Party</Text>
            </View>
    
            <View style={styles.card}>
              <Image
                source={Images.office}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Office Party</Text>
            </View>

            <View style={styles.card}>
              <Image
                source={Images.baby}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>Baby Shower Party</Text>
            </View>
    
    

          </ScrollView>
    
          </View>
        
      );
  };
  
export default Services

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

  