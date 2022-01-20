import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';
const Button = ({text, iconName}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
