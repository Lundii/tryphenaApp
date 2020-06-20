import React, {createContext, useReducer, useEffect} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const reducer = (prevState, action) => {
    switch (action.type) {
      // case 'RESTORE TOKEN':
      //   return {
      //     ...prevState,
      //     token: action.token,
      //     isLoading: false,
      //   };
      case 'SIGNIN':
        return {
          ...prevState,
          token: action.token,
          isLoading: false,
          isSignedIn: true,
        };
      case 'SIGNOUT':
        return {
          ...prevState,
          token: null,
          isLoading: false,
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

  return (
    <AuthContext.Provider value={[authState, authDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
