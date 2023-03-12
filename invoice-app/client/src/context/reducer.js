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
  DISPLAY_FORM,
  ADD_INVOICE_ITEM,
  CHANGE_INVOICE_ITEM,
  DELETE_INVOICE_ITEM,
  GET_INVOICES_BEGIN,
  GET_INVOICES_SUCCESS,
  GET_SINGLE_INVOICE_BEGIN,
  GET_SINGLE_INVOICE_ERROR,
  GET_SINGLE_INVOICE_SUCCESS,
  SET_EDIT_JOB,
  EDIT_INVOICE_BEGIN,
  EDIT_INVOICE_ERROR,
  EDIT_INVOICE_SUCCESS,
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
      status: '',
      description: '',
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

  if (action.type === DISPLAY_FORM) {
    return {
      ...state,
      showForm: action.payload,
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
      invoiceAlert: false,
    };
  }

  if (action.type === CREATE_INVOICE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
      invoiceAlert: true,
    };
  }

  if (action.type === GET_INVOICES_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_INVOICES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      invoices: action.payload.invoices,
      totalInvoices: action.payload.totalInvoices,
    };
  }

  if (action.type === GET_SINGLE_INVOICE_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_SINGLE_INVOICE_SUCCESS) {
    return {
      ...state,
      singleInvoice: action.payload,
      isLoading: false,
      showError: false,
    };
  }

  if (action.type === GET_SINGLE_INVOICE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showError: true,
    };
  }

  if (action.type === SET_EDIT_JOB) {
    const {
      _id,
      name,
      address,
      city,
      postCode,
      country,
      date,
      paymentTerms,
      description,
      status,
      items,
      clientName,
      clientEmail,
      clientAddress,
      clientCity,
      clientPostCode,
      clientCountry,
    } = state.singleInvoice;

    return {
      ...state,
      isEditing: true,
      showForm: true,
      editInvoiceId: _id,
      name,
      address,
      city,
      postCode,
      country,
      date,
      paymentTerms,
      description,
      status,
      items,
      clientName,
      clientEmail,
      clientAddress,
      clientCity,
      clientPostCode,
      clientCountry,
    };
  }
  //#endregion

  //#region Invoice item
  if (action.type === ADD_INVOICE_ITEM) {
    const timestamp = Date.now().toString(36);

    return {
      ...state,
      items: [
        ...state.items,
        {
          name: '',
          quantity: 0,
          price: 0,
          amount: 0,
          check: timestamp,
        },
      ],
    };
  }

  if (action.type === CHANGE_INVOICE_ITEM) {
    const tempObj = state.items.map(item => {
      if (item.check === action.payload.check) {
        item[action.payload.name] = action.payload.value;

        item.amount = (item.price * item.quantity).toFixed(2);
      }

      return item;
    });

    return {
      ...state,
      items: tempObj,
    };
  }

  if (action.type === DELETE_INVOICE_ITEM) {
    const tempObj = state.items.filter(item => item.check !== action.payload);

    return {
      ...state,
      items: tempObj,
    };
  }

  if (action.type === EDIT_INVOICE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_INVOICE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      showForm: false,
      isEditing: false,
      alertType: 'success',
      alertText: 'Invoice Updated!',
      invoiceAlert: false,
    };
  }

  if (action.type === EDIT_INVOICE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
      invoiceAlert: true,
    };
  }
  //#endregion

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
