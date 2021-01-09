import { ActionsObservable, ofType } from 'redux-observable';
import { withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { push } from 'connected-react-router';
import { SEND_MESSAGE, sendMessageFailure } from '../../actions';
import config from '../../config.json';

const redirect = () => push('/');

const createRequest = (token, recipientUsername, content) => ({
  method: 'POST',
  url: `${config.apiUrl}messages/send`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: {
    recipientUsername,
    content,
  },
});

const sendMessage = (action$, state$, { ajax }) => action$.pipe(
  ofType(SEND_MESSAGE),
  withLatestFrom(state$),
  mergeMap(([action]) => ajax(createRequest(action.token, action.recipientUsername, action.message)).pipe(
    mergeMap(() => [redirect()]),
    catchError((err) => ActionsObservable.of(sendMessageFailure(err))),
  )),
);

export default sendMessage;
