import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import epic from './epic'

import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import user from './reducers/userReducer'

export const history = createBrowserHistory()

export const createRootReducer = (history) =>
  combineReducers({ router: connectRouter(history), user })

const getStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } })

  const middlewares = [routerMiddleware(history), epicMiddleware]

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const rootReducer = createRootReducer(history)

  const initialState = {}

  const store = createStore(rootReducer, initialState, enhancer)

  epicMiddleware.run(epic)

  return store
}

export default getStore
