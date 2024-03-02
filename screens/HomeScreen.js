import React from "react";
import { useFonts } from 'expo-font';
import { View,  StyleSheet} from 'react-native';
import {  Text } from 'react-native-paper';
import TopView from "../components/Topview";
import { ScrollView } from "react-native-gesture-handler";
import Hall from "../components/Hall";
import SearchBar from "../components/SearchBar";
import Buttons from "../widgets/Buttons";
import Imagebg from "../widgets/Imagebg";
import Imageban from "../widgets/Imageban";
import Service from "../components/Services";
import Servicebn from "../widgets/Servicebn";
import Bookbtn from "../widgets/Bookbtn";
import SFooter from "../widgets/SFooter";

export default function HomeScreen({navigation}) {

 
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
    <View style={styles.containers} >
    <TopView />
    <ScrollView>
    <SearchBar/>
    <Hall/>
    <View style={{marginBottom:20}}>
    <Servicebn />
    </View>
     <Service />
     
   <View style={{ marginTop:15}}> 
     <Bookbtn />
     </View>
    <View style={{marginTop:30}}>

    <Imagebg/>
    </View>
  <Text style={{flex:1,fontSize:24, textAlign: 'center',
   padding:20, color:'red',
    fontFamily:'bold'}}>
      Main Course</Text>

    <Imageban /> 
   <View style={{marginBottom:10, marginTop:20,paddingBottom: 0}}> 
     <Buttons/>
     </View>
    </ScrollView>
    <SFooter />
   </View>    



 )
}

const styles = StyleSheet.create({

  containers: {
    flex: 1,
  },
   
});
