import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
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
    <Stack.Navigator
      initialRouteName="Allsites"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF6666',
        },
        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Montserrat-Medium',
          alignItems: 'center',
          justifyContents: 'center',
        },
        headerTintColor: 'white',
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="more-v-a"
              style={{paddingRight: 24}}
              size={20}
              color="white"
            />
          </View>
        ),
      }}>
      <Stack.Screen
        name="Sites"
        component={Allsites}
        options={{
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="search"
                style={{paddingRight: 20}}
                size={20}
                color="white"
              />
              <Icon
                name="more-v-a"
                style={{paddingRight: 24}}
                size={20}
                color="white"
              />
            </View>
          ),
        }}
      />
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
