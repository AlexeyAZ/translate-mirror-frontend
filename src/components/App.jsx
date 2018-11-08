import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '../store/store';

import Routes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  children: PropTypes.any,
};

export default App;