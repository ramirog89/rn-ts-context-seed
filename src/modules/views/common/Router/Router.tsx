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
          drawerStyle={{
            backgroundColor: '#29434e',
            paddingTop: 3,
            width: '85%',
          }}
          drawerContent={props => (
            <DrawerContentScrollView {...props}>
              <DrawerItemList
                {...props}
                activeTintColor="#FFFFFF"
                inactiveTintColor="#FFFFFF"
                activeBackgroundColor="#546e7a"
                itemStyle={{ width: '100%', marginLeft: 0, paddingLeft: 10, borderRadius: 0 }}
                labelStyle={{ color: '#FFFFFF' }}
              />
              <DrawerItem
                style={{ marginLeft: 0, paddingLeft: 10, }}
                labelStyle={{ color: '#FFFFFF' }}
                label="Logout"
                onPress={signOut}
              />
            </DrawerContentScrollView>
          )}
        >
          <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign In',
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#29434e',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
