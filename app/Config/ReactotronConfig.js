import Immutable from 'seamless-immutable';
import Reactotron, {openInEditor} from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AppConfig from 'Config';

if (AppConfig.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  console.log('Im using Reactotron Bro!!');
  // please set in configure your awn local ip address
  Reactotron.configure({name: 'Prueba Tecnica Tyba', host: '192.168.0.15'})
    .useReactNative()
    .use(reduxPlugin({onRestore: Immutable}))
    .use(sagaPlugin())
    .use(openInEditor())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  // console.tron = Reactotron;
  // console.tron.log("Im using Reactotron Bro!!");
}
