import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {AppConfig} from 'Config';
import createSagaMiddleware from 'redux-saga';

import {reduxNavigationMiddleware} from 'Config/Navigation/ReduxNavigation';
import {rootSaga} from 'Logic';

// * Create Store
const configureReduxStore = (rootReducer, rootSagaParam) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Navigation Middleware ------------ */
  const navigationMiddleware = reduxNavigationMiddleware;
  middleware.push(navigationMiddleware);

  /* ------------- Analytics Middleware ------------- */

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSagaParam);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  user: require('Reducers/User/UserReducer').reducer,
  nav: require('Config/Navigation/NavReducer').reducer,
});

const createReduxStore = () => {
  let {store} = configureReduxStore(reducers, rootSaga);

  return store;
};

export {createReduxStore};
