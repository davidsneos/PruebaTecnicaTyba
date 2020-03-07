import {useScreens} from 'react-native-screens';
import React from 'react';
import styled from 'styled-components/native';
// import Reactotron from 'reactotron-react-native';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {StatusBar} from 'react-native';

import {AppConfig} from 'Config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ReduxNavigation} from 'Config/Navigation/ReduxNavigation';
import {createReduxStore} from 'Data/ReduxConfig';

useScreens();

export const store = createReduxStore();

export const renderFlashMessageMaterialIcon = (
  icon = 'success',
  color = 'white',
) => {
  const finalIcon = icon === 'success' ? 'check' : icon;
  return (
    <Icon name={finalIcon} size={20} color={color} style={{paddingRight: 10}} />
  );
};

export function opacityTransition(animValue, position = 'top') {
  const opacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return {
    opacity,
  };
}

// TODO: Isolate on Styled Comp File
export const MainContainerSV = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Provider store={store}>
      <MainContainerSV>
        <StatusBar barStyle="dark-content" />
        <ReduxNavigation />
        <FlashMessage
          position={'top'}
          transitionConfig={opacityTransition}
          renderFlashMessageIcon={icon =>
            renderFlashMessageMaterialIcon(icon, this.props.theme.primary)
          }
        />
      </MainContainerSV>
    </Provider>
  );
};

// allow reactotron overlay for fast design in dev mode
export default App;
