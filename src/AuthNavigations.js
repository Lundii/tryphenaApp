import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login';

const Stack = createStackNavigator();

const AuthNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigations;
