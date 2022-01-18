import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    padding: 4,
    borderRadius: 10,
  },
  jobName: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  companyName: {fontWeight: 'bold', color: 'gray'},

  locationName: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#ff4d4d',
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  levelsName: {
    fontWeight: 'bold',
    color: '#ff4d4d',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
});

export default styles;
