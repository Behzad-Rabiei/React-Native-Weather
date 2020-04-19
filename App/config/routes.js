import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Search from '../screens/Search';

import {HeaderRightButton} from '../components/HeaderRightButton';

const searchIcon = require('../../assets/icons8-search-in-cloud-100.png');

const MainStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => (
            <HeaderRightButton
              onPress={() => {
                navigation.navigate('Search');
              }}
              icon={searchIcon}
            />
          ),
        })}
      />
      <MainStack.Screen name="Search" component={Search} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
