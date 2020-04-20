import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export const H1 = ({children}) => <Text style={styles.h1}>{children}</Text>;

export const H2 = ({children}) => <Text style={styles.h2}>{children}</Text>;

export const P = ({children}) => <Text style={styles.p}>{children}</Text>;
