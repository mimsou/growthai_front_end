import { SET_URL, SET_LOADING, SET_AUDIT_MODE, SET_SESSION_ID } from './actionTypes';
export { submitUrl }  from 'store/actions/submitUrl';

export const setUrl = (url: string) => ({
  type: SET_URL,
  payload: url,
});

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setAuditMode = (isLoading: boolean) => ({
  type: SET_AUDIT_MODE,
  payload: isLoading,
});

export const addSessionId = (sessionId: string) => ({
  type: SET_SESSION_ID,
  payload: sessionId,
});

export const addData = (data: any, type: string) => ({
  type: type,
  payload: data,
});

export const addAiResponse = (response: string, type: string) => ({
  type: type,
  payload: response,
});
