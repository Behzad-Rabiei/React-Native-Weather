import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const HeaderRightButton = ({icon, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={icon} resizeMode="contain" style={styles.image} />
  </TouchableOpacity>
);

export default HeaderRightButton;
