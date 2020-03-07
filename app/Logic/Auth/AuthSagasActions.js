import {createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginAttempt: ['email', 'password'],
});

export const AuthSagasTypes = Types;
export default Creators;
