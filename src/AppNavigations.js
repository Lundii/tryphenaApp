import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';

const Stack = createStackNavigator();

const AppNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppNavigations;
