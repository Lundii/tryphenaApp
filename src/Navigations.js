import React, {useContext} from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigations from './AppNavigations';
import AuthNavigations from './AuthNavigations';
import {AuthContext} from './context/authContext';
import Splash from './screens/splash';

const Routes = () => {
  const [authState] = useContext(AuthContext);

  if (authState.isLoading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {authState.isSignedIn ? (
        <>
          <AppNavigations />
        </>
      ) : (
        <>
          <AuthNavigations />
        </>
      )}
    </NavigationContainer>
  );
};

export default Routes;
