import { combineEpics } from 'redux-observable';

import userLogIn from './epics/user/userLogIn';
import getMessages from './epics/messages/getMessages';

export default combineEpics(userLogIn, getMessages);
