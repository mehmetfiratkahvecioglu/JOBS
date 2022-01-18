import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//pages
import HomeScreen from '../pages/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App;
