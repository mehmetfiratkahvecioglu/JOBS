import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FavoriteJobListCard from '../../components/FavoriteJobListCard';
import styles from './SettingsScreen.style';
const SettingsScreen = () => {
  const dispatch = useDispatch();

  const list = useSelector(state => state.favoriteJobList);
  const renderItem = ({item}) => (
    <FavoriteJobListCard
      job={item}
      handleRemoveItem={() => {
        dispatch({
          type: 'REMOVE_FAVORITE_JOB',
          payload: {removeJobId: item.id},
        });
      }}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={renderItem} />
    </View>
  );
};

export default SettingsScreen;
