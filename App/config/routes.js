import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Search from '../screens/Search';

import {HeaderRightButton} from '../components/HeaderRightButton';

const searchIcon = require('../../assets/icons8-search-in-cloud-100.png');
const cancelIcon = require('../../assets/icons8-cancel-96.png');

const MainStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator mode="modal">
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
              tintColor="#fff"
            />
          ),
          headerStyle: {backgroundColor: '#000083'},
          headerTintColor: '#FFF',
        })}
      />
      <MainStack.Screen
        name="Search"
        component={Search}
        options={({navigation}) => ({
          headerLeft: null,
          headerRight: () => (
            <HeaderRightButton
              onPress={() => navigation.navigate('Home')}
              icon={cancelIcon}
            />
          ),
        })}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
