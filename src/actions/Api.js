import Api from '../lib/api';

export function get({ onStart, onSuccess, onError, url, query, payload }, cb) {
  return dispatch => {
    dispatch({
      type: onStart,
      payload
    });
    Api(url, {
      method: 'GET',
      data: query,
    })
      .then(res => {
        const { data } = res;
        if (data.Response && data.Response === 'Error') {
          dispatch({ type: onError, payload: res.Message });
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