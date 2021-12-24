import React from 'react';
import {View, Text} from 'react-native';

const SettingsScreen = ({route}) => {
  const {number} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Text>{number}</Text>
    </View>
  );
};

export default SettingsScreen;
