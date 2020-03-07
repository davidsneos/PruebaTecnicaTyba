import {Metrics, Colors} from 'Globals';
import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';

import {zoomIn} from 'react-navigation-transitions';

import {
  LeftDrawer,
  LoginScreen,
  LogScreen,
  RegisterScreen,
  SearchScreen,
} from 'Screens';

const scenesTransition = ({scenes}) => {
  const nextScene = scenes[scenes.length - 1].route.routeName;
  if (
    nextScene === 'LightsSceneCreator' ||
    nextScene === 'NewHouseScene' ||
    nextScene === 'NewZoneScene'
  ) {
    return zoomIn();
  }
};

const MainTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchScreen, // NewZones
      navigationOptions: () => ({
        tabBarVisible: false,
        // tabBarIcon: ({ tintColor }) => (
        //   <IconWithTheme
        //     name="home-map-marker"
        //     colorName={tintColor}
        //     size={30}
        //     title="Zones"
        //   />
        // ), // tabBarIcon: <HomeButton />,
      }),
    },
    LogView: {
      screen: LogScreen, // NewZones
      navigationOptions: () => ({
        tabBarVisible: false,
      }),
    },

    // Scenes: {
    //   screen: SceneCreationShades,
    //   navigationOptions: () => ({
    //     tabBarIcon: ({ tintColor }) => (
    //       <IconWithTheme
    //         name="movie"
    //         colorName={tintColor}
    //         size={30}
    //         title="Scenes"
    //       />
    //     ),
    //   }),
    // },
  },
  {
    initialRouteName: 'Search',
    lazyLoad: true,
    lazy: true,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'accent',
      inactiveTintColor: 'secondary', // inactive icon color
      style: {
        backgroundColor: '#1c1c1c', // TabBar background
      },
    },
  },
);

const MainDrawerStack = createDrawerNavigator(
  {
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Main',
    contentComponent: LeftDrawer,
    drawerPosition: 'left',
    drawerWidth: Metrics.screenWidth * 0.67,
    drawerBackgroundColor: 'transparent',
    navigationOptions: {
      header: null,
    },
  },
);

const LoginStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {backgroundColor: Colors.backgroundColor},
    },
  },
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LoginStack: {screen: LoginStack},
    LoggedStack: {screen: MainDrawerStack},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginStack',
    navigationOptions: {
      headerStyle: {backgroundColor: Colors.backgroundColor},
    },
  },
);

export default createAppContainer(PrimaryNav);
