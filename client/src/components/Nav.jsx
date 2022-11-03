import React from 'react'

import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div>
        Logo
      </div>
      <div>
        <NavLink className='nav-btn' to='/'>Home</NavLink>
        <NavLink className='nav-btn' to='/signup'>Signup</NavLink>
        <NavLink className='nav-btn' to='/users'>Users</NavLink>
      </div>
    </div>
  )
}

export default Nav