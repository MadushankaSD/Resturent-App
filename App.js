import React from 'react';
import{createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from "./app/screens/HomeScreen";

const RootApp = createSwitchNavigator(
    {
        Home:HomeScreen
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'LK Resturant'
      }
    }
)
export default createAppContainer(RootApp);
