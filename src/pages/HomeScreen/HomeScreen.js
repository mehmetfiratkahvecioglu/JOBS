import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <TextInput
        style={{borderWidth: 2, borderColor: 'black', minWidth: 100}}
        onChangeText={val => {
          setText(val);
        }}
        value={text}
      />
      <Button
        title="ADD NAME"
        onPress={() => {
          dispatch({type: 'ADD_NAME', payload: {name: text}});
        }}
      />
    </View>
  );
};

export default HomeScreen;
