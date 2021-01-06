export const GET_MESSAGES = 'GET_MESSAGES'
export const getMessages = (token) => ({
  type: GET_MESSAGES,
  token
})

export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const getMessagesSuccess = (res) => ({
  type: GET_MESSAGES_SUCCESS,
  response: res.response
})

export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE'
export const getMessagesFailure = (res) => ({
  type: GET_MESSAGES_FAILURE,
  response: res.response
})
