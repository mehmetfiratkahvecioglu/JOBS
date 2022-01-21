import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';
const Button = ({text, iconName, handleAddFavorite}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleAddFavorite}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
