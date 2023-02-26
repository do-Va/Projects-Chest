import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGOUT_USER,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  CLEAR_VALUES,
  CREATE_INVOICE_BEGIN,
  CREATE_INVOICE_ERROR,
  CREATE_INVOICE_SUCCESS,
  HANDLE_CHANGE,
} from './action';

import { initialState } from './appContext';

const reducer = (state, action) => {
  //#region Functions
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      clientName: '',
      clientEmail: '',
      clientAddress: '',
      clientCity: '',
      clientPostCode: '',
      clientCountry: '',
      name: '',
      address: '',
      city: '',
      postCode: '',
      country: '',
      date: '',
      paymentTerms: 1,
      items: [],
    };

    return {
      ...state,
      ...initialState,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  //#endregion

  //#region User
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    const { token, user, alertText } = action.payload;

    return {
      ...state,
      isLoading: false,
      user,
      token,
      alertType: 'success',
      alertText: alertText,
      showAlert: true,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: 'danger',
      alertText: action.payload.msg,
      showAlert: true,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  //#endregion

  //#region Invoice
  if (action.type === CREATE_INVOICE_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_INVOICE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Invoice Created!',
    };
  }

  if (action.type === CREATE_INVOICE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  //#endregion

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
