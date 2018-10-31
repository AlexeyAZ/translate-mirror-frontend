import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store/store';

import Login from './components/pages/Login';

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Routes;

