import Cookie from 'js-cookie';
import config from '../config';

import {
  GET_AUTH_STATUS,
} from '../constants/authConstants';

const initialState = {
 auth: Cookie.get(config.AUTH_KEY) ? true : false
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case GET_AUTH_STATUS: {
      const token = Cookie.get(config.AUTH_KEY);
      return {...state, auth: token ? true : false }
    }
    default:
      return state
  }
}