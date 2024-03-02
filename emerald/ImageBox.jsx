import React, { useState } from 'react';
import { View, Image, StyleSheet,Modal, TouchableOpacity, Text } from 'react-native';
import { Images } from '../config/images';
import { useFonts } from 'expo-font';

const images = [
  { id: 1, source: Images.e },
  { id: 2, source: Images.e1 },
  { id: 3, source: Images.e3 },
  { id: 4, source: Images.e4 },
  { id: 5, source: Images.e5 },
  { id: 6, source: Images.e6 },
];




const ImageBox = () => {
 
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const renderImages = () => {
    return images.map((image) => (
      <TouchableOpacity key={image.id} onPress={() => handleImageClick(image)}>
        <Image source={image.source} style={styles.image} />
      </TouchableOpacity>
    ));
  };
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
    <View style={styles.container}>
      <Text style={styles.text}> Emerald Hall Photos</Text>
    <View style={styles.slider}>{renderImages()}</View>
    <Modal visible={selectedImage != null} transparent={true}>
      <TouchableOpacity
        onPress={() => setSelectedImage(null)}
        style={styles.modalContainer}
      >
        <Image source={selectedImage?.source} style={styles.modalImage} />
      </TouchableOpacity>
    </Modal>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    textAlign:'center',
    fontSize:48,
    fontFamily:'cur',
    color:'#000',
    fontWeight:500
  },
  slider: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius:10,
    resizeMode:'cover'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalImage: {
    width: '200%',
    height: '500%',
    resizeMode: 'contain',
  },
});

export default ImageBox;
