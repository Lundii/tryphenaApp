import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {Button, View} from 'react-native';
import Login from './src/screens/login';
import Home from './src/screens/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const App = () => {
//   return (
//     <NavigationContainer>
//       <View>
//         <Login />
//       </View>
//     </NavigationContainer>
//   );
// };
// export default App;
