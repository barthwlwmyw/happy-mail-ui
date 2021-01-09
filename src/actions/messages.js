export const GET_MESSAGES = 'GET_MESSAGES';
export const getMessages = (token) => ({
  type: GET_MESSAGES,
  token,
});

export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const getMessagesSuccess = (res) => ({
  type: GET_MESSAGES_SUCCESS,
  response: res.response,
});

export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';
export const getMessagesFailure = (res) => ({
  type: GET_MESSAGES_FAILURE,
  response: res.response,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (messageData) => ({
  type: SEND_MESSAGE,
  ...messageData,
});

export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
export const sendMessageFailure = (res) => ({
  type: SEND_MESSAGE_FAILURE,
  response: res.response,
});
