import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Anciliary = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={} />
      <Tab.Screen name="Settings" component={} />
    </Tab.Navigator>
  );
};

export default Anciliary;
