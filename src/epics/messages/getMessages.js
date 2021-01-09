import { ActionsObservable, ofType } from 'redux-observable';
import { withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { GET_MESSAGES, getMessagesSuccess, getMessagesFailure } from '../../actions';
import config from '../../config.json';

const handleSuccess = (response) => getMessagesSuccess(response);

const createRequest = (token) => ({
  method: 'GET',
  url: `${config.apiUrl}messages`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const getMessages = (action$, state$, { ajax }) => action$.pipe(
  ofType(GET_MESSAGES),
  withLatestFrom(state$),
  mergeMap(([action]) => ajax(createRequest(action.token)).pipe(
    mergeMap((res) => [handleSuccess(res)]),
    catchError((err) => ActionsObservable.of(getMessagesFailure(err))),
  )),
);

export default getMessages;
