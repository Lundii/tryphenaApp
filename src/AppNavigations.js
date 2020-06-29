import React from 'react';
import {View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/home';
import NewSite from './screens/newsite';

const Drawer = createDrawerNavigator();

const AppNavigations = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AllSites" component={Home} />
      <Drawer.Screen name="New Site" component={NewSite} />
    </Drawer.Navigator>
  );
};

export default AppNavigations;
