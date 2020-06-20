import React from 'react';
import {View, Button} from 'react-native';
import Allsites from '../allSites';
import SiteCard from '../sitecards';
import {createDrawerNavigator} from '@react-navigation/drawer';

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

const Home = () => {
  return (
    <Drawer.Navigator drawerStyle={{elevation: 5}} initialRouteName="Allsites" drawerType="front">
      <Drawer.Screen name="SiteCards" component={SiteCard} />
      <Drawer.Screen name="Allsites" component={Allsites} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default Home;
