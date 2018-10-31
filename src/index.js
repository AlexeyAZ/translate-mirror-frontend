import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import Routes from './Routes';

import * as serviceWorker from './serviceWorker';

import './styles/index.css';

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
    <Routes />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
