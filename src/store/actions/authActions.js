import axios from 'axios';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
} from './actionTypes';
import {jwtDecode} from 'jwt-decode';
import BASE_API_URL from '../../config';

export const signUp = (userData) => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/signup`, userData);
    localStorage.setItem('token', response.data.token);

    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAILURE,
      payload: error.response?.data?.message || 'Sign-up failed',
    });
    throw new Error(error.response?.data?.message || 'Sign-up failed');
  }
};

export const signIn = (credentials) => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/login`, credentials);
    const { access_token } = response.data;
    localStorage.setItem('token', access_token);
    const decodedUser = jwtDecode(access_token);

    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: decodedUser,
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response?.data?.message || 'Sign-in failed',
    });
    throw new Error(error.response?.data?.message || 'Sign-in failed');
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: SIGN_OUT });
};
