import React from 'react';
import {View, Text} from 'react-native';
import RFAntenna from './RFAntena';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const Anciliary = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RF Antennas" component={RFAntenna} />
      <Tab.Screen name="Microwave" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Anciliary;
