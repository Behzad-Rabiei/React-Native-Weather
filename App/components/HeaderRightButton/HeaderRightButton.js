import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const HeaderRightButton = ({icon, onPress, tintColor}) => {
  const imageStyle = [styles.image];
  if (tintColor) {
    imageStyle.push(styles.whiteTintColor);
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon} resizeMode="contain" style={imageStyle} />
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
