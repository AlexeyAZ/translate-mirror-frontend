import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Admin from '../pages/Admin';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => (
        <div>Main</div>
      )}
      />
      <Route path="/register" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route render={() => (<div>Miss</div>)} />
    </Switch>
  )
};

export default Routes;

