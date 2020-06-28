import React from 'react';
import'react-native-gesture-handler'
import{createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";
import DetailScreen from "./app/screens/DetailScreen";

const RootApp = createStackNavigator(
    {
        Home:HomeScreen,
        Detail:DetailScreen
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'LK Resturant'
      }
    }
)
export default createAppContainer(RootApp);
