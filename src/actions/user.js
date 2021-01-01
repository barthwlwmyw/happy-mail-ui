export const USER_LOG_IN = 'USER_LOG_IN'
export const userLogIn = (authData) => ({
  type: USER_LOG_IN,
  ...authData
})
