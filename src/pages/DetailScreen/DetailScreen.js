import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './DetailScreen.style';
import axios from 'axios';
import JobDetailCard from '../../components/JobDetailCard';
const DetailScreen = ({route}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = route.params;

  const fetchData = () => {
    axios.get('https://www.themuse.com/api/public/jobs/' + id).then(res => {
      setData(res.data);
      setLoading(false);
      console.log(res);
    });
  };

  const renderItem = ({item}) => <JobDetailCard job={item} />;

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Text>LOADING</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList data={[data]} renderItem={renderItem} />
    </View>
  );
};

export default DetailScreen;
