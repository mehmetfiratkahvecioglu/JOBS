import {View, Text} from 'react-native';
import React from 'react';
import styles from './FavoriteJobListCard.style';
import Button from '../Button';
const FavoriteJobListCard = ({job, handleRemoveItem}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.jobName}>
        {job.name}
      </Text>
      <Text style={styles.companyName}>{job.company.name}</Text>
      <Text style={styles.locationName}>
        {job.locations && job.locations.length > 0
          ? job.locations[0].name
          : 'Unknown Location'}
      </Text>
      <Text style={styles.levelsName}>
        {job.levels && job.levels.length > 0
          ? job.levels[0].name
          : 'Unknown Level'}
      </Text>
      <View style={styles.buttonContainer}>
        <Button text="Remove" onPress={handleRemoveItem} iconName={'trash-o'} />
      </View>
    </View>
  );
};

export default FavoriteJobListCard;
