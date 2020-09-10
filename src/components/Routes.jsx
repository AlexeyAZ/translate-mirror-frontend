import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Mirror from '../pages/Mirror';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={() => <Redirect to="/home" />}
    />
      <Switch>
        <Route path="/register" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/mirror" component={Mirror} />
        <Route path="/home" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </React.Fragment>
    
  )
};

export default Routes;

