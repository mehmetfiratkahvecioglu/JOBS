import React from 'react';
import {View, Text} from 'react-native';
import HTMLView from 'react-native-htmlview';
const JobDetailCard = ({job}) => {
  return (
    <View>
      <Text>{job.name}</Text>
      <HTMLView value={job.contents} />
    </View>
  );
};

export default JobDetailCard;
