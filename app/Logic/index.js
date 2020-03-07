import {all} from 'redux-saga/effects';
// import API from "Data/API/Api";
import {AuthSagas} from './Auth/AuthSagas';

/* ------------- Sagas ------------- */
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

function* rootSaga() {
  yield all([AuthSagas()]);
}

export {rootSaga};
