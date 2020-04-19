import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
  $darkblue: '#000083',
  $white: '#fff',
});

export default () => <Navigator />;
