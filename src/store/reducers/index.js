import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer,
});

export default rootReducer;