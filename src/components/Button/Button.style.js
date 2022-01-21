import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#ff4d4d',
    padding: 10,
    width: Dimensions.get('window').width / 2.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {fontWeight: 'bold', color: 'white'},
});

export default styles;
