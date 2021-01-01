export const USER_LOG_IN = 'USER_LOG_IN'
export const userLogIn = (authData) => ({
  type: USER_LOG_IN,
  ...authData
})

export const USER_LOG_IN_SUCCESS = 'USER_LOG_IN_SUCCESS'
export const userLogInSuccess = (res) => ({
  type: USER_LOG_IN_SUCCESS,
  ...res.response
})

export const USER_LOG_IN_FAILURE = 'USER_LOG_IN_FAILURE'
export const userLogInFailure = (res) => ({
  type: USER_LOG_IN_FAILURE,
  ...res.response
})
