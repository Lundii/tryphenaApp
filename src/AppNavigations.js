import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/home';

const Drawer = createDrawerNavigator();

const AppNavigations = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default AppNavigations;
