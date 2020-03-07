import {Alert} from 'react-native';
import firebase from 'react-native-firebase';
import {showMessage} from 'react-native-flash-message';
import {all, put, takeLatest} from 'redux-saga/effects';
import AuthSagasActions, {AuthSagasTypes} from './AuthSagasActions';

export function* loginAttempt(action) {
  const {email, password} = action;

  try {
    const loginResult = yield firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    if (loginResult !== null) {
      // console.tron.log('LOGGED')
      // console.tron.log(loginResult)
      const {uid} = loginResult.user;
      const refreshToken = yield loginResult.user.getIdToken();

      yield put(AuthSagasActions.login(refreshToken, uid));
    } else {
      Alert.alert(
        'Intenta Nuevamente',
        'Los datos ingresados no coinciden con ningún usuario existente. Por favor intenta de nuevo',
      );
    }
  } catch (Exception) {
    showMessage({
      type: 'danger',
      message: 'Auth Error',
      description: 'Check your credentials',
      icon: 'error',
      position: 'top',
    });
  }
}

export function* AuthSagas() {
  yield all([takeLatest(AuthSagasTypes.LOGIN_ATTEMPT, loginAttempt)]);
}
