import React from 'react';
import Allsites from '../allSites';
import SiteCards from '../sitecards';
import SiteDetails from '../siteDetails';
import Observations from '../observations';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Allsites">
      <Stack.Screen name="Allsites" component={Allsites} />
      <Stack.Screen name="SiteCards" component={SiteCards} />
      <Stack.Screen name="SiteDetails" component={SiteDetails} />
      <Stack.Screen name="Observations" component={Observations} />
    </Stack.Navigator>
  );
};

export default Home;
