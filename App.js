import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import Exchange from './screens/Exchange';
import SettingScreen from './screens/SettingScreen.js';

import customSidebarMenu from './components/customSideBarMenu.js';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

export default function App() {
  return(  
    <AppContainer />
    
    )
}

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    Exchange: { screen: Exchange },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'HomeScreen') {
          return (
            <Image
              source={require('./assets/home-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          );
        } else if (routeName === 'Exchange') {
          return (
            <Image
              source={require('./assets/ads-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: 'lightgreen',
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 15,
        height: 50,
      },
    },
  }
);
const AppDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    Settings: {
      screen: SettingScreen,
    },
  },
  {
    contentComponent: customSidebarMenu,
  },
  {
    initialRouteName: 'Home',

  }
);
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  //BottomTab: { screen: TabNavigator },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  AppDrawNavigator : AppDrawNavigator,
});

const AppContainer = createAppContainer(switchNavigator);
