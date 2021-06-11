import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../../../context/auth';

import HomeScreen from '../../screen/Home';
import ProfileScreen from '../../screen/Profile';
import SignInScreen from '../../screen/SignIn';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Router = () => {
  const { state, signOut } = useAuth();

  return (
    <NavigationContainer>
      {state.isAuth ? (
        <Drawer.Navigator
          drawerContent={props => (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem label="Logout" onPress={signOut} />
            </DrawerContentScrollView>
          )}
        >
          <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
