import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import HomeScreen from '../views/pages/Home';
import ProfileScreen from '../views/pages/Profile';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
