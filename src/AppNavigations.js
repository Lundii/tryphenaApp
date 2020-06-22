import React from 'react';
import {View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/home';

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
const AppNavigations = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AllSites" component={Home} />
    </Drawer.Navigator>
  );
};

export default AppNavigations;
