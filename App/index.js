import React from 'react';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $darkblue: '#000083',
  $white: '#fff',
});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
