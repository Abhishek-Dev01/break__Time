import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Emerald from './screens/Emerald';
import Onboard from './components/Onboard';
import Rub from './screens/Ruby';
import Sap from './screens/Saphire';
import Book from './screens/Book';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboard'>
       <Stack.Screen name="Onboards" component={Onboard} options={{ headerShown: false  }} /> 
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Emerald" component={Emerald} options={{ headerShown: false }}/>
        <Stack.Screen name='rub' component={Rub}  options={{ headerShown: false }}/>
        <Stack.Screen name='Sap' component={Sap} options={{ headerShown: false }}/>
        <Stack.Screen name='book' component={Book} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
      </NavigationContainer>
    );
}



export default App;
