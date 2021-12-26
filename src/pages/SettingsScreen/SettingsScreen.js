import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const SettingsScreen = () => {
  const list = useSelector(state => state.nameList);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <FlatList data={list} renderItem={({item}) => <Text>{item}</Text>} />
    </View>
  );
};

export default SettingsScreen;
