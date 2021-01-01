const defaultUserState = {
  isLoggedIn: false,
  username: null,
  jwtToken: null
}

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer
