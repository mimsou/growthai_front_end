import { SET_URL, SET_LOADING } from '../actions/actionTypes';

const initialState = {
  url: '',
  isLoading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_URL:
      return {
        ...state,
        url: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
