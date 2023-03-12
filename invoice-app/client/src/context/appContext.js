import React, { useReducer, useContext } from 'react';
import axios from 'axios';

import reducer from './reducer';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGOUT_USER,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  CREATE_INVOICE_BEGIN,
  CREATE_INVOICE_ERROR,
  CREATE_INVOICE_SUCCESS,
  CLEAR_VALUES,
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
  CHANGE_INVOICE_STATUS_BEGIN,
  CHANGE_INVOICE_STATUS_ERROR,
  CHANGE_INVOICE_STATUS_SUCCESS,
} from './action';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const clientState = {
  clientName: '',
  clientEmail: '',
  clientAddress: '',
  clientCity: '',
  clientPostCode: '',
  clientCountry: '',
};

const invoiceState = {
  name: '',
  address: '',
  city: '',
  postCode: '',
  country: '',
  date: '',
  paymentTerms: 1,
  paymentTermsOption: [1, 7, 14, 30],
  status: '',
  description: '',
  items: [],
  invoices: [],
  totalInvoices: 0,
  invoiceAlert: false,
  singleInvoice: {},
};

const initialState = {
  ...clientState,
  ...invoiceState,
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token,
  showAlert: false,
  showForm: false,
  alertText: '',
  alertType: '',
  showError: false,
  isEditing: false,
  editInvoiceId: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //#region Axios Setup
  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  // request
  authFetch.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${state.token}`;

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // response
  authFetch.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      console.log(error.response);

      if (error.response.status === 401) {
        logoutUser();
      }

      return Promise.reject(error);
    }
  );
  //#endregion

  //#region Functions
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });

    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const displayForm = value => {
    dispatch({ type: DISPLAY_FORM, payload: value });
  };
  //#endregion

  //#region User
  // Register and Login
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, token } = data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText },
      });

      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  // logout User
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };
  //#endregion

  //#region Invoice Items
  const addInvoiceItem = () => {
    dispatch({ type: ADD_INVOICE_ITEM });
  };

  const changeInvoiceItemValue = ({ check, name, value }) => {
    dispatch({ type: CHANGE_INVOICE_ITEM, payload: { check, name, value } });
  };

  const deleteInvoiceItem = check => {
    dispatch({ type: DELETE_INVOICE_ITEM, payload: check });
  };
  //#endregion

  //#region Invoice
  const createInvoice = async status => {
    dispatch({ type: CREATE_INVOICE_BEGIN });

    try {
      const {
        clientName,
        clientEmail,
        clientAddress,
        clientCity,
        clientPostCode,
        clientCountry,
        name,
        address,
        city,
        postCode,
        country,
        date,
        paymentTerms,
        description,
        items,
      } = state;

      await authFetch.post('/invoices', {
        clientName,
        clientEmail,
        clientAddress,
        clientCity,
        clientPostCode,
        clientCountry,
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
      });

      dispatch({ type: CREATE_INVOICE_SUCCESS });
      getAllInvoices();
      displayForm(false);
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;

      dispatch({
        type: CREATE_INVOICE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  const getAllInvoices = async () => {
    let url = `/invoices`;

    dispatch({ type: GET_INVOICES_BEGIN });

    try {
      const { data } = await authFetch(url);

      const { invoices, totalInvoices } = data;

      dispatch({
        type: GET_INVOICES_SUCCESS,
        payload: {
          invoices,
          totalInvoices,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getSingleInvoice = async id => {
    dispatch({ type: GET_SINGLE_INVOICE_BEGIN });

    try {
      const { data } = await authFetch(`/invoices/${id}`);

      const { singleInvoice } = data;

      dispatch({
        type: GET_SINGLE_INVOICE_SUCCESS,
        payload: singleInvoice,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_INVOICE_ERROR,
      });
    }
  };

  const setEditJob = () => {
    dispatch({ type: SET_EDIT_JOB });
  };

  const editInvoice = async () => {
    dispatch({ type: EDIT_INVOICE_BEGIN });

    try {
      const {
        editInvoiceId,
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
      } = state;

      await authFetch.patch(`/invoices/${editInvoiceId}`, {
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
      });

      dispatch({ type: EDIT_INVOICE_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;

      dispatch({
        type: EDIT_INVOICE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  const changeInvoiceStatus = async status => {
    dispatch({ type: CHANGE_INVOICE_STATUS_BEGIN });

    const { _id } = state.singleInvoice;

    try {
      await authFetch.put(`/invoices/${_id}`, {
        status,
      });

      dispatch({ type: CHANGE_INVOICE_STATUS_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;

      dispatch({
        type: CHANGE_INVOICE_STATUS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };
  //#endregion

  return (
    <AppContext.Provider
      value={{
        ...state,
        setupUser,
        logoutUser,
        displayAlert,
        clearValues,
        createInvoice,
        handleChange,
        displayForm,
        addInvoiceItem,
        changeInvoiceItemValue,
        deleteInvoiceItem,
        getAllInvoices,
        getSingleInvoice,
        setEditJob,
        editInvoice,
        changeInvoiceStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
