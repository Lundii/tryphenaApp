import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './screens/login';

const Drawer = createDrawerNavigator();

const AuthNavigations = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={Login}
      />
    </Drawer.Navigator>
  );
};

export default AuthNavigations;
