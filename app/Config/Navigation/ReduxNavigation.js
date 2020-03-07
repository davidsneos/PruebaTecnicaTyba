import React, {useEffect} from 'react';
import {BackHandler, Platform} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect, useDispatch} from 'react-redux';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import AppNavigation from './AppNavigation';

/* ------------- Navigation Middleware ------------ */
export const reduxNavigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);
const App = createReduxContainer(AppNavigation);
const mapStateToProps = state => ({state: state.nav});
const AppWithNavigationState = connect(mapStateToProps)(App);

const ReduxNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // * Android Back Handler
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () => {
        dispatch(NavigationActions.back());
        return true;
      });
    }

    return () => {
      // * Android Back Handler
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress');
      }
    };
  }, [dispatch]);

  return <AppWithNavigationState />;
};

export {ReduxNavigation};
