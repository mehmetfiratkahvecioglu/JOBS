import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const SettingsScreen = () => {
  const list = useSelector(state => state.favoriteJobList);
  console.log(list);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Settings! </Text>
      <FlatList data={list} renderItem={({item}) => <Text>{item.name}</Text>} />
    </View>
  );
};

export default SettingsScreen;
