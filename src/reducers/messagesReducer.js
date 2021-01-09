import { GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE, USER_LOG_OUT } from '../actions';

const defaultMessagesState = {
  messages: [],
};

const messagesReducer = (state = defaultMessagesState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return {
        messages: action.response,
      };

    case GET_MESSAGES_FAILURE:
      return defaultMessagesState;

    case USER_LOG_OUT:
      return defaultMessagesState;

    default:
      return state;
  }
};

export default messagesReducer;
