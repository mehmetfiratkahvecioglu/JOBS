import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './DetailScreen.style';
import axios from 'axios';
import JobDetailCard from '../../components/JobDetailCard';
import {useDispatch} from 'react-redux';
const DetailScreen = ({route}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = route.params;
  const dispatch = useDispatch();

  /*const handleAddFavorite = () => {
    dispatch({type: 'ADD_FAVORITE_JOB', payload: {newFavoriteJob: item}});
  };*/

  const fetchData = () => {
    axios.get('https://www.themuse.com/api/public/jobs/' + id).then(res => {
      setData(res.data);
      setLoading(false);
      console.log(res);
    });
  };

  const renderItem = ({item}) => (
    <JobDetailCard
      job={item}
      handleAddFavorite={() => {
        dispatch({type: 'ADD_FAVORITE_JOB', payload: {newFavoriteJob: item}});
      }}
    />
  );

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#ff4d4d" size={50} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList data={[data]} renderItem={renderItem} />
    </View>
  );
};

export default DetailScreen;
