import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store/store';


import App from './components/App';

import * as serviceWorker from './serviceWorker';

import './styles/global.module.scss';

const Router = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    )
  }
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
};

Router.propTypes = {
  children: PropTypes.any,
};

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
