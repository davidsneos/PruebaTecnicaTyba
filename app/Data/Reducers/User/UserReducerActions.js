import {createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  saveLoginInfo: ['token', 'uid'],
});

export const UserReducerTypes = Types;
export default Creators;
