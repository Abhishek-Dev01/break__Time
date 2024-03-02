import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React  from 'react'
import Topview from '../components/Topview'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import SFooter from '../widgets/SFooter';
import BookNow from '../emerald/BookNow';
import Rslider from '../ruby/REslider';
import RImageBox from '../ruby/RImageBox';

const Ruby = () => {
  
  return (
    <View style={{justifyContent:'center', alignContent:'center', marginBottom:80}}>
      <Topview /> 
      <SearchBar />
      <ScrollView>
      <Rslider/>
      <RImageBox/>
      <BookNow/>
      </ScrollView>
      <SFooter/>
      </View>

  )
}

export default Ruby

const styles = StyleSheet.create({
  
})