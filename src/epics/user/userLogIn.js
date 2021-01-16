import { ActionsObservable, ofType } from 'redux-observable';
import { withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { push } from 'connected-react-router';
import { USER_LOG_IN, userLogInSuccess, userLogInFailure } from '../../actions';
import config from '../../config.json';

const handleSuccess = (response) => userLogInSuccess(response);

const redirect = () => push('/');

const createRequest = (username, password) => ({
  method: 'POST',
  url: `${config.apiUrl}auth/signin`,
  headers: { 'Content-Type': 'application/json' },
  body: {
    username,
    password,
  },
});

const userLogIn = (action$, state$, { ajax }) => action$.pipe(
  ofType(USER_LOG_IN),
  withLatestFrom(state$),
  mergeMap(([action]) => ajax(createRequest(action.username, action.password)).pipe(
    mergeMap((res) => [handleSuccess(res), redirect()]),
    catchError((err) => ActionsObservable.of(userLogInFailure(err))),
  )),
);

export default userLogIn;
