import Cookie from 'js-cookie';
import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERROR,

  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from '../constants/userConstants';

const initialState = {
  rawUsersList: [],
  // isLogged: Cookie.get('isLogged') ? parseInt(Cookie.get('isLogged')) : 0,
  isFetching: false,
  error: null
};

export function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST_REQUEST:
      return {...state, isFetching: true, error: null};
    case GET_USERS_LIST_SUCCESS: {
      console.log(action.payload)
      return {...state, rawUsersList: action.payload, isFetching: false, error: null}
    }
    case GET_USERS_LIST_ERROR: {
      const error = action.payload.response ? action.payload.response : action.payload.message;
      return {...state, error, isFetching: false}
    }

    case CREATE_USER_REQUEST:
      return {...state, isFetching: true, error: null};
    case CREATE_USER_SUCCESS: {
      return {...state, isFetching: false, error: null}
    }
    case CREATE_USER_ERROR: {
      const error = action.payload.response.data;
      return {...state, error, isFetching: false}
    }

    case USER_LOGIN_REQUEST:
      return {...state, isFetching: true, error: null};
    case USER_LOGIN_SUCCESS: {
      Cookie.set('sess3', action.payload)
      return {...state, isFetching: false, error: null}
    }
    case USER_LOGIN_ERROR: {
      const error = action.payload.response.data;
      return {...state, error, isFetching: false}
    }

    default:
      return state;
  }
}