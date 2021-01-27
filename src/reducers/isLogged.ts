import { Reducer } from 'redux';

const isLoggedReducer: Reducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return state;
  }
};

export default isLoggedReducer;
