import {UserReducerTypes} from './UserReducerActions';

export const user = {
  uid: '',
  email: '',
  token: '',
  firstName: '',
  lastName: '',
};

export const reducer = (state = user, action) => {
  const {type} = action;

  switch (type) {
    case UserReducerTypes.SAVE_LOGIN_INFO:
      const {token, uid} = action;
      return {...state, token, uid};
  }

  return state;
};
