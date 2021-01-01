import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import epic from './epic'

import userReducer from './reducers/userReducer'

const getStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } })

  const middlewares = [epicMiddleware]

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const rootReducer = combineReducers({ userReducer })

  const initialState = {}

  const store = createStore(rootReducer, initialState, enhancer)

  epicMiddleware.run(epic)

  return store
}

export default getStore