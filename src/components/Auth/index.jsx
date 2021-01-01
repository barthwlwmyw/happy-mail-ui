import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { userLogIn } from '../../actions'

const Auth = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogIn = () => {
    console.log('bef')
    dispatch(userLogIn({ username, password }))

    console.log('aft')
  }

  return (
    <div className='Box'>
      <p>
        Auth page content
      </p>

      <small>Username:</small>
      <div>
        <input
          type='text'
          value={username}
          onChange={(event) => { setUsername(event.target.value) }}
        />
      </div>

      <small>Password:</small>
      <div>
        <input
          type='password'
          value={password}
          onChange={(event) => { setPassword(event.target.value) }}
        />
      </div>

      <div className='Box'>
        <button onClick={handleLogIn}>
            Log In
        </button>
      </div>
    </div>
  )
}

export default Auth
