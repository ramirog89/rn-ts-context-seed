import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { ContextProvider } from './context/provider';
import Router from './Router';

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
