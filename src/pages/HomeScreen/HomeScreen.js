import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 10,
  },
  inputContainer: {
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 5,
  },
});

export default HomeScreen;
