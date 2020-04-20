import React from 'react';
import {View, Image} from 'react-native';
import {getWeatherIcon} from '../../utils/icon';
import styles from './styles';

const WeatherIcon = ({icon}) => {
  console.log(getWeatherIcon(icon));
  return (
    <View style={styles.container}>
      <Image
        source={getWeatherIcon(icon)}
        resizeMode="contain"
        style={styles.icon}
      />
    </View>
  );
};

export default WeatherIcon;
