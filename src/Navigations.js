import React, {useContext} from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigations from './AppNavigations';
import AuthNavigations from './AuthNavigations';
import {AuthContext} from './context/authContext';

const Routes = () => {
  const [authState] = useContext(AuthContext);

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
