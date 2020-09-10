import Cookie from 'js-cookie';
import Api from '../lib/api';
import config from '../config';

export function get({ onStart, onSuccess, onError, url, query, payload, ...params }, cb) {
  return dispatch => {
    dispatch({
      type: onStart,
      payload
    });
    if (params.token) {
      Api.defaults.headers['Authorization'] = params.token;
    } else {
      let intToken = Cookie.get(config.AUTH_KEY);
      Api.defaults.headers['Authorization'] = intToken;
    }
    Api(url, {
      method: 'GET',
      data: query,
    })
      .then(res => {
        console.log(res); // eslint-disable-line
        const { data } = res;
        if ((data.Response && data.Response === 'Error') || data.error) {
          console.log('Response ERROR!!!')
          dispatch({ type: onError, payload: res.Message || data.error });
          return;
        }
        dispatch({ type: onSuccess, payload: res.data });
        if (cb) {
          dispatch(cb)
        }
      })
      .catch(error => {
        console.log(error); // eslint-disable-line
        dispatch({ type: onError, payload: error });
      })
  }
}

export function post({ onStart, onSuccess, onError, url, query, payload }, cb) {
  return dispatch => {
    dispatch({
      type: onStart,
      payload
    });
    Api(url, {
      method: 'POST',
      data: query,
    })
      .then(res => {
        const { data } = res;
        if ((data.Response && data.Response === 'Error') || data.error) {
          console.log('Responce ERROR!!!')
          dispatch({ type: onError, payload: res.Message || data.error });
          return;
        }
        dispatch({ type: onSuccess, payload: res.data });
        if (cb) {
          dispatch(cb())
        }
      })
      .catch(error => {
        console.log(error); // eslint-disable-line
        dispatch({ type: onError, payload: error });
      })
  }
}