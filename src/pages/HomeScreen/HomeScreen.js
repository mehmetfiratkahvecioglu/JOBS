import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './Home.style';
import axios from 'axios';
import JobListCard from '../../components/JobListCard';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    axios.get('https://www.themuse.com/api/public/jobs?page=1').then(res => {
      setData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigation = (jobId, jobName) => {
    navigation.navigate('DetailScreen', {id: jobId, name: jobName});
  };
  const renderItem = ({item}) => {
    return (
      <JobListCard
        job={item}
        handleNavigation={() => {
          handleNavigation(item.id, item.name);
        }}
      />
    );
  };
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#ff4d4d" size={50} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;
