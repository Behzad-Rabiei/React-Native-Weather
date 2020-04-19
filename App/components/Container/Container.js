import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Container = ({children, backgroundColor}) => {
  const containerStyle = [styles.container];
  if (backgroundColor) {
    containerStyle.push({backgroundColor: `${backgroundColor}`});
  }
  return <View style={containerStyle}>{children}</View>;
};

export default Container;
