import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import User from './User'

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/users')
      .then(r => r.json())
      .then(data => {
        if(data) {
          setUsers(data)
        } else {
          console.log(data)
        }
      })
  }, [])

  console.log(users)

  const userArray = users.map(user => {
    return <User key={user._id} user={user} />
  })

  return (
    <div className='users-container'>
      {userArray}
    </div>
  )
}

export default UsersPage