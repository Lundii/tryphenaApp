import React from 'react';
import {View, Text} from 'react-native';
import RFAntenna from './RFAntena';
import MWAntena from './MWAntena';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Ancillary = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RF Antennas" component={RFAntenna} />
      <Tab.Screen name="Microwave" component={MWAntena} />
    </Tab.Navigator>
  );
};

export default Ancillary;
