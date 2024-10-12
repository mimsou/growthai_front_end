import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
import aiReducer from './aiReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer,
  ai: aiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
  