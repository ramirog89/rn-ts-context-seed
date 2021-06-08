import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './context/auth';

import HomeScreen from './views/pages/Home';
import ProfileScreen from './views/pages/Profile';
import SignInScreen from './views/pages/SignIn';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Router = () => {
  const { state, signOut } = useAuth();

  return (
    state.isAuth ? (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={signOut} />
          </DrawerContentScrollView>
        )
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        {/* <Drawer.Screen name="Sign Out" component={ProfileScreen} options={{ title: 'Sign Out' }} /> */}
      </Drawer.Navigator>
    ) : (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    )
  );
}

export default Router;
