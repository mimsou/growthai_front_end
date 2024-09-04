import { SET_URL, SET_LOADING } from './actions/actionTypes';

export const setUrl = (url) => ({
  type: SET_URL,
  payload: url,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});
