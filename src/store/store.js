import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { users } from '../reducers/userReducer';
import { auth } from '../reducers/authReducer';
import { sidebar } from '../reducers/sidebarReducer';

export const history = createBrowserHistory();

const logger = createLogger({
  collapsed: true
});

const rootReducer = combineReducers({
  users,
  sidebar,
  auth,
});

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history), logger)),
);