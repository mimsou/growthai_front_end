import axios from 'axios';
import { Dispatch } from 'redux';
import { NavigateFunction } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { CredentialResponse } from '@react-oauth/google';
import {
  AUTH_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
} from './actionTypes';
import BASE_API_URL from 'config';

export const signUp = (userData: { name: string; email: string; password: string }) => async (dispatch: any) => {
  dispatch({ type: AUTH_REQUEST });
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/register`, userData);
    const { token } = response.data;
    localStorage.setItem('token', token); // Store token
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: jwtDecode(token),
    });
  } catch (error: any) {
    dispatch({
      type: SIGN_UP_FAILURE,
      payload: error.response?.data?.message || 'Sign-up failed',
    });
    throw new Error(error.response?.data?.message || 'Sign-up failed');
  }
};

export const signIn = (credentials: { email: string; password: string }) => async (dispatch: any) => {
  dispatch({ type: AUTH_REQUEST });
  try {
    const response = await axios.post(`${BASE_API_URL}/auth/login`, credentials);
    const { access_token } = response.data;
    localStorage.setItem('token', access_token); // Store token
    const decodedUser = jwtDecode(access_token);

    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: decodedUser,
    });
  } catch (error: any) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response?.data?.message || 'Sign-in failed',
    });
    throw new Error(error.response?.data?.message || 'Sign-in failed');
  }
};

export const signOut = () => (dispatch: any) => {
  localStorage.removeItem('token'); // Remove token
  dispatch({ type: SIGN_OUT });
};


export const handleGoogleSignIn = (credentialResponse: CredentialResponse, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: AUTH_REQUEST });
    try {
      const { credential } = credentialResponse;

      if (!credential) {
        throw new Error('Google Sign-In failed');
      }

      const backendResponse = await axios.post(`${BASE_API_URL}/auth/google`, {
        token: credential,
      });

      const { access_token } = backendResponse.data;

      localStorage.setItem('token', access_token);

      const decodedUser = jwtDecode<any>(access_token);

      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: decodedUser,
      });

      navigate('/dashboard');
    } catch (error: any) {
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: error.message || 'Google Sign-In failed',
      });
    };
  };
}
