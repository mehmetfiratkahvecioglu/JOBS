import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [number, setNumber] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Text>{number}</Text>
      <Button
        title="increase"
        onPress={() => {
          setNumber(number + 1);
        }}
      />
      <Button
        title="go to settings"
        onPress={() => {
          navigation.navigate('Settings', {number});
        }}
      />
    </View>
  );
};

export default HomeScreen;
