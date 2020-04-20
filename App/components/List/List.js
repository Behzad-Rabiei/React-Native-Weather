import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export const basicRow = ({children}) => (
  <View style={styles.basicRow}>{children}</View>
);
