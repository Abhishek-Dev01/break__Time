import React,{useState} from 'react';
import { StyleSheet, View, Text, 
  Animated, Easing,
   ScrollView, Image, TouchableOpacity } from 'react-native';
import { Images } from '../config/images';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const Hall = () => {
  
const navigation = useNavigation();

const Emerald = () => {
  navigation.navigate('Emerald');
};
const Ruby = () => {
  navigation.navigate('rub');
};
const Sap = () => {
  navigation.navigate('Sap');
};


  const [animation] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0.9,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();

    onPress();
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };


  const [loaded] =useFonts ({
    opens: require('../assets/font/open.ttf'),
    openi: require('../assets/font/openi.ttf'),
    pro: require('../assets/font/pro.ttf'),
    poppins: require('../assets/font/poppins.ttf'),
    bold: require('../assets/font/bold.ttf'),
    });
    if (!loaded) {
      return null;
    }
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Image
            source={Images.emerald}
            style={styles.cardImage}
            resizeMode="cover"
          />
          
          <View style={styles.cardText}>
            <Text style={styles.cardTitle} > Emerald Hall</Text>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Emerald')
            }>              
            <Animated.Text style={[styles.text, animatedStyle]} >Let's Go</Animated.Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={Images.pic1}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Sapphire Hall</Text>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Sap')}>
            <Animated.Text style={[styles.text, animatedStyle]}>Let's Go</Animated.Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={Images.pic2}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle} >Ruby Hall</Text>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('rub')}>
            <Animated.Text style={[styles.text, animatedStyle]}>Let's Go</Animated.Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Hall

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  button: {
    backgroundColor: '#B8860B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
  },
  card: {
    width: 350,
    height: 400,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: '70%',

  },
  cardText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardTitle: {
    fontSize: 26,
    marginBottom: 5,
    fontFamily:'opens',
    color:'#000',
    fontWeight:700,
    textAlign:'center'
  },
  cardDescription: {
    fontSize: 12,
    color: '#999',
  },
});
