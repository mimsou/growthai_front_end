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
import {jwtDecode} from 'jwt-decode';

// Function to verify token validity
const isValidToken = (token: string | null): boolean => {
  if (!token) return false;
  try {
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // Check if token is expired
  } catch (e) {
    return false;
  }
};

// Initialize state from localStorage
const token = localStorage.getItem('token');
const initialState = {
  isAuthenticated: !!token && isValidToken(token),
  user: token && isValidToken(token) ? jwtDecode(token) : null,
  token: token && isValidToken(token) ? token : null,
  error: null,
  isLoading: false,
};

const authReducer = (state = initialState, action: any) => {
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
      return {
        ...initialState,
        isAuthenticated: false,
        user: null,
        token: null,
      };
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
