import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    fullName: '',
    hometown: ''
  })
  const nav = useNavigate()

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        if(data) {
          nav('/users')
        } else {
          console.log(data)
        }
      })
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
      <label htmlFor='username'>Username: </label>
      <input className='form-btn' type='text' name='username' onChange={handleFormChange} />
      </div>
      <div>      
      <label htmlFor='email'>Email: </label>
      <input className='form-btn' type='email' name='email' onChange={handleFormChange} />
      </div>
      <div>      
      <label htmlFor='fullName'>Full Name: </label>
      <input className='form-btn' type='text' name='fullName' onChange={handleFormChange} />
      </div>
      <div>
      <label htmlFor='hometown'>Hometown: </label>
      <input className='form-btn' type='text' name='hometown' onChange={handleFormChange} />
      </div>
      <input className='form-submit' type='submit' />
    </form>
  )
}

export default Signup