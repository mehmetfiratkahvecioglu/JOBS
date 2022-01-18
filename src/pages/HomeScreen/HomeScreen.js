import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './Home.style';
import HTMLView from 'react-native-htmlview';
import axios from 'axios';
import JobListCard from '../../components/JobListCard';
const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    axios.get('https://www.themuse.com/api/public/jobs?page=1').then(res => {
      console.log(res);
      setData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return <JobListCard job={item} />;
  };

  return (
    <View style={styles.container}>
      {loading && <Text>Loading </Text>}
      <FlatList data={data.results} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;
