// import React from 'react';
// import {View, Button} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from './screens/home';
// import NewSite from './screens/newsite';

// const Drawer = createDrawerNavigator();

// const AppNavigations = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="AllSites" component={Home} />
//       <Drawer.Screen name="New Site" component={NewSite} />
//     </Drawer.Navigator>
//   );
// };

// export default AppNavigations;

import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {createStackNavigator} from '@react-navigation/stack';
import {SiteProvider} from './context/siteContext';
import Allsites from './screens/allSites';
import SiteCards from './screens/sitecards';
import SiteDetails from './screens/siteDetails';
import Observations from './screens/observations';
import Ancillary from './screens/ancillary';
import Instructions from './screens/instructions';
import TowerMapping from './screens/towermapping';

const Stack = createStackNavigator();

const AppNavigations = () => {
  return (
    <SiteProvider>
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
    </SiteProvider>
  );
};

export default AppNavigations;
