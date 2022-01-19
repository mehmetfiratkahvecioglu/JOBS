import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//pages
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
