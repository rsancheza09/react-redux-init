import * as types from '../actions/actionTypes';

const initialState = {
  search: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH :
      return {
        ...state,
        search: action.payload,
      };
    case types.CHECK_ID_PROVIDED :
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
