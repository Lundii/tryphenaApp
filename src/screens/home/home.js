import React from 'react';
import Allsites from '../allSites';
import SiteCards from '../sitecards';
import SiteDetails from '../siteDetails';
import Observations from '../observations';
import Ancillary from '../ancillary';
import Instructions from '../instructions';
import TowerMapping from '../towermapping';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Allsites">
      <Stack.Screen name="Allsites" component={Allsites} />
      <Stack.Screen name="SiteCards" component={SiteCards} />
      <Stack.Screen name="SiteDetails" component={SiteDetails} />
      <Stack.Screen name="Observations" component={Observations} />
      <Stack.Screen name="Anciliary" component={Ancillary} />
      <Stack.Screen name="Instructions" component={Instructions} />
      <Stack.Screen name="Tower Member Mapping" component={TowerMapping} />
    </Stack.Navigator>
  );
};

export default Home;
