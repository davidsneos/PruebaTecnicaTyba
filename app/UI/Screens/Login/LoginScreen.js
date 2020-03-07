import React from 'react';
import {Text} from 'react-native';
import {LoginContainer} from 'Screens/Login/LoginScreenStyled';
import {Button} from 'Components';

const LoginScreen = () => {
  return (
    <LoginContainer>
      <Text>Login Screen</Text>
      <Button>Go to Register</Button>
    </LoginContainer>
  );
};

export default LoginScreen;
