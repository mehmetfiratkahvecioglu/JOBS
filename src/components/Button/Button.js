import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({text, onPress, iconName}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={20} color={'white'} />
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
