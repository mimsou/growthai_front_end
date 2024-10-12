import { ADD_AI_ROBOT_RESPONSE, SET_SESSION_ID } from '../actions/actionTypes';

const initialState = {
  answer: '',
  sessionId: null
};

const aiReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case ADD_AI_ROBOT_RESPONSE:
      return { ...state, answer: action.payload };
    case SET_SESSION_ID:
        return { ...state, sessionId: action.payload };
    default:
      return state;
  }
};

export default aiReducer;
