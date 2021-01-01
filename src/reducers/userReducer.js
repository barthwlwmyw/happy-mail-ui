import { USER_LOG_IN_SUCCESS, USER_LOG_IN_FAILURE } from './../actions'

const defaultUserState = {
  isLoggedIn: false,
  username: null,
  jwtToken: null
}

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case USER_LOG_IN_SUCCESS:
      return {
        isLoggedIn: true,
        username: action.username,
        jwtToken: action.accessToken
      }

    case USER_LOG_IN_FAILURE:
      return defaultUserState

    default:
      return state
  }
}

export default userReducer
