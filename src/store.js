import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import epic from './epic';

import user from './reducers/userReducer';
import messages from './reducers/messagesReducer';

export const history = createBrowserHistory();

// eslint-disable-next-line max-len
export const createRootReducer = (history) => combineReducers({ router: connectRouter(history), user, messages });

const getStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } });

  const middlewares = [routerMiddleware(history), epicMiddleware];

  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const rootReducer = createRootReducer(history);

  const initialState = {};

  const store = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(epic);

  return store;
};

export default getStore;
