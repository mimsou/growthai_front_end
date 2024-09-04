import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_OUT,
  } from '../actions/actionTypes';
  
  const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    isLoading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_IN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          token: action.payload.token,
          error: null,
          isLoading: false,
        };
      case SIGN_IN_FAILURE:
      case SIGN_UP_FAILURE:
      case AUTH_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null,
          error: action.payload,
          isLoading: false,
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          token: action.payload.token,
          error: null,
          isLoading: false,
        };
      case SIGN_OUT:
        return initialState;
      case AUTH_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case AUTH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  