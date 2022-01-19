import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './JobListCard.style';

const JobListCard = ({job, handleNavigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <View>
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
      </View>
    </TouchableOpacity>
  );
};

export default JobListCard;
