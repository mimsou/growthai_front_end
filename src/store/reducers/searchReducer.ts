import { SET_URL, SET_LOADING, SUBMIT_URL, ADD_DATA_ROBOT, SET_AUDIT_MODE, ADD_DATA_SITEMAP } from '../actions/actionTypes';
import { IndexEnum } from 'enum/dataIndexEnum';

interface SearchState {
  url: string;
  isLoading: boolean;
  robot_data: any[];
  auditMode: boolean;
}

const initialState: SearchState = {
  url: '',
  isLoading: false,
  robot_data: [],
  auditMode: false,
};

const searchReducer = (state = initialState, action: any): SearchState => {
  console.log(action);
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
    case SUBMIT_URL:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_DATA_ROBOT:
      return {
        ...state,
        [IndexEnum['ROBOT_DATA' as keyof typeof IndexEnum]]: action.payload,
      };
    case ADD_DATA_SITEMAP:
      return {
        ...state,
        [IndexEnum['SITEMAP_DATA' as keyof typeof IndexEnum]]: action.payload,
      };
    case SET_AUDIT_MODE:
      return {
        ...state,
        auditMode: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
