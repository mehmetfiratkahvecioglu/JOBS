import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './Home.style';
const HomeScreen = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>JOBS</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={val => {
            setText(val);
          }}
          value={text}
        />
      </View>
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
