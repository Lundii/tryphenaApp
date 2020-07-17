import React, {createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'RESTORE TOKEN':
        return {
          ...prevState,
          token: action.token,
          isLoading: false,
          isSignedIn: !!action.token,
        };
      case 'SIGNIN':
        AsyncStorage.setItem('userToken', action.token);
        return {
          ...prevState,
          token: action.token,
          isSignedIn: true,
        };
      case 'SIGNOUT':
        return {
          ...prevState,
          token: null,
          isSignedIn: false,
        };
    }
  };

  const initialState = {
    isLoading: true,
    token: null,
    isSignedIn: false,
  };

  const [authState, authDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      console.log(userToken);
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      authDispatch({type: 'RESTORE TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={[authState, authDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
