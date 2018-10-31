import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERROR,
} from '../constants/userConstants';

const initialState = {
  rawUsersList: [],
  isFetching: false,
  error: null
};

export function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST_REQUEST:
      return {...state, isFetching: true, error: null};
    case GET_USERS_LIST_SUCCESS: {
      return {...state, rawUsersList: action.payload, isFetching: false, error: null}
    }
    case GET_USERS_LIST_ERROR: {
      const error = action.payload.response ? action.payload.response : action.payload.message;
      return {...state, error, isFetching: false}
    }

    default:
      return state;
  }
}