import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React  from 'react'
import Topview from '../components/Topview'

import Eslider from '../emerald/Eslider';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import ImageBox from '../emerald/ImageBox';
import Three3d from '../emerald/Three3d';
import SFooter from '../widgets/SFooter';
import BookNow from '../emerald/BookNow';
import SEslider from '../sap/SEslider';
import ImageGrid from '../sap/ImageGrid';

const Saphire = () => {
  
  return (
    <View style={{justifyContent:'center', alignContent:'center', marginBottom:80}}>
      <Topview /> 
      <SearchBar />
      <ScrollView>
       <SEslider/>
      <ImageGrid />
      <BookNow />
      </ScrollView>
      <SFooter/>
      </View>

  )
}

export default Saphire

const styles = StyleSheet.create({
  
})