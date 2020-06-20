import React from 'react';
import {AuthProvider} from './src/context/authContext';
import Navigations from './src/Navigations';

export default function App() {
  return (
    <AuthProvider>
      <Navigations />
    </AuthProvider>
  );
}
