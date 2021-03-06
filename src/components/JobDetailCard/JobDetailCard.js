import React from 'react';
import {View, Text, Alert} from 'react-native';
import HTMLView from 'react-native-htmlview';
import styles from './JobDetailCard.style';
import Button from '../Button';

const JobDetailCard = ({job, handleAddFavorite}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{job.name}</Text>
        <Text>
          <Text style={styles.locations}>Locations:</Text>{' '}
          {job.locations && job.locations.length > 0
            ? job.locations[0].name
            : 'Unkown locations'}
        </Text>
        <Text>
          <Text style={styles.jobLevel}>Job level:</Text>{' '}
          {job.levels && job.levels.length > 0
            ? job.levels[0].name
            : 'Unkown Level'}
        </Text>
        <Text style={styles.jobDetail}>Job Detail</Text>
      </View>
      <View style={styles.bodyContainer}>
        <HTMLView value={job.contents} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={'Submit'}
          iconName={'check-square-o'}
          onPress={() => {
            Alert.alert(
              'Congratulations',
              'Your application has been received',
            );
          }}
        />
        <Button
          text={'Favorite Job'}
          iconName={'heart'}
          onPress={handleAddFavorite}
        />
      </View>
    </View>
  );
};

export default JobDetailCard;
