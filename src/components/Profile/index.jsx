import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userData = useSelector(state => state.user)

  return (
    <div className='Box'>
      <p>
        Profile page content:
      </p>

      {userData.isLoggedIn
        ? (
          <p>
          You are logged in. Your username is {userData.username}.
          </p>)
        : (
          <p>
              You are not logged in.
          </p>)}
    </div>
  )
}

export default Profile
