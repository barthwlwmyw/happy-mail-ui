
import { ActionsObservable, ofType } from 'redux-observable'
import { withLatestFrom, mergeMap, catchError } from 'rxjs/operators'
import { USER_LOG_IN } from '../../actions'
import config from '../../config.json'
import { push } from 'connected-react-router'

const userLogIn = (action$, state$, { ajax }) =>
  action$.pipe(
    ofType(USER_LOG_IN),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax(createRequest(action.username, action.password)).pipe(
        mergeMap((res) => [handleSuccess(res), redirect()]),
        catchError(err => ActionsObservable.of(failureAction(err)))
      )
    })
  )

const redirect = () => {
  return push('/')
}

const handleSuccess = (response) => {
  return { type: 'i znowu sukces i znowu nie my', body: response }
}

const failureAction = (err) => ({ type: 'porazka porazka porazka', body: err })

const createRequest = (username, password) => ({
  method: 'POST',
  url: `${config.apiUrl}auth/signin`,
  headers: { 'Content-Type': 'application/json' },
  body: {
    username,
    password
  }
})

export default userLogIn
