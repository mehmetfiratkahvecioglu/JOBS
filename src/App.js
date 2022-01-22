import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
//pages
import HomeStack from './Navigation/HomeStack';
import SettingsScreen from './pages/SettingsScreen';
//redux
import UserProvider from './context/Provider';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#ff4d4d',
          }}>
          <Drawer.Screen name="Jobs" component={HomeStack} />
          <Drawer.Screen name="Favorited Jobs" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
