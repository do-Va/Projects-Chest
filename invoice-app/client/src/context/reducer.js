import {
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
} from './action';

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    const { token, user } = action.payload;

    return {
      ...state,
      isLoading: false,
      user,
      token,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
