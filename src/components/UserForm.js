import React, { useState } from 'react'
import './UserForm.css'
import { NewUser } from './NewUser'

const UserForm = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const nameChangeHandler = event => {
    setEnteredName(event.target.value)
    console.log(event.target.value)
  }
  const ageChangeHandler = event => {
    setEnteredAge(event.target.value)
    console.log(event.target.value)
  }
  const submitHandler = event => {
    event.preventDefault()
    const userData = {
      name: enteredName,
      age: enteredAge
    }
    setEnteredAge('')
    setEnteredName('')
  }

  return (
    <div>
      <div className='new-user'>
        <form onSubmit={submitHandler}>
          <div className='new-user__controls'>
            <div className='new-user__control'>
              <label>Username</label>
              <input
                type='text'
                value={enteredName}
                onChange={nameChangeHandler}
              />
            </div>
            <div className='new-user__control'>
              <label>Age (Years)</label>
              <input
                type='text'
                value={enteredAge}
                onChange={ageChangeHandler}
              />
            </div>
            <div className='new-user__actions'>
              <button type='submit'>Add User</button>
            </div>
          </div>
        </form>
      </div>
      <NewUser />
    </div>
  )
}

export default UserForm
