import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//pages
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Jobs',
          headerTintColor: '#ff4d4d',
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({route}) => ({
          title: route.params.name,
          headerTintColor: '#ff4d4d',
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
