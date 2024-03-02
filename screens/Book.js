import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topview from '../components/Topview'
import Bfrom from '../booking/Bform'
import { ScrollView } from 'react-native-gesture-handler'
import BText from '../booking/BText'
import BFooter from '../booking/Bfooter'
import BCard from '../booking/CardB'

const Book = () => {
  return (
    <View style={styles.container}>
      <Topview />
      <BText />
      <ScrollView style={{flex:1}}>
      
      <Bfrom/>
      
      </ScrollView>
      
    </View>
  )
}

export default Book

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
})