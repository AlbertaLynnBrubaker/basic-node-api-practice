import React from 'react'

const User = ({user}) => {
  const { username, email, fullName, hometown } = user
  return (
    <div className='user-card'>
      <h2>{username}</h2>
      <h2>{email}</h2>
      <h2>{fullName}</h2>
      <h2>{hometown}</h2>
    </div>
  )
}

export default User