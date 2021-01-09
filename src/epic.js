import { combineEpics } from 'redux-observable';

import userLogIn from './epics/user/userLogIn';
import getMessages from './epics/messages/getMessages';
import sendMessage from './epics/messages/sendMessage';

export default combineEpics(userLogIn, getMessages, sendMessage);
