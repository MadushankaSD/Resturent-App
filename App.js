import React from 'react';
import{createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from "./app/screens/HomeScreen";
import DetailScreen from "./app/screens/DetailScreen";

const RootApp = createSwitchNavigator(
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
