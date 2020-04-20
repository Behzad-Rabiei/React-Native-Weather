import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export const BasicRow = ({children}) => (
  <View style={styles.basicRow}>{children}</View>
);
