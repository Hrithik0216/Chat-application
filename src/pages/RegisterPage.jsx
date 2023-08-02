import { useState } from "react"
import React from 'react'
import { userAuth } from "../utils/AuthContext"
import { Link } from "react-router-dom"

const RegisterPage = () => {

  const { handleUserRegister } = userAuth()

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password1: '',
    password2: ''

  })

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value })
    //console.log(credentials)
  }


  return (
    <div className='"auth--container'>
       <div className="heading">
                <h2 className=''>Hrithik's Chat application</h2>
                <h4>Create your account🐶</h4>
            </div>

      <div className="form--wrapper">
        <form onSubmit={(e) => { handleUserRegister(e, credentials) }}>

          <div className="field--wrapper">
            <label>Name:</label>
            <input type="text" required
              name="name"
              placeholder='Enter your name...'
              value={credentials.name}
              onChange={handleInputChange} />
          </div>
          <div className="field--wrapper">
            <label>Email:</label>
            <input type="email" required
              name="email"
              placeholder='Enter your mail...'
              value={credentials.email}
              onChange={handleInputChange} />
          </div>
          <div className="field--wrapper">
            <label>Password:</label>
            <input type="password" required
              name="password1"
              placeholder='Enter your password'
              value={credentials.password1}
              onChange={handleInputChange} />
          </div>
          <div className="field--wrapper">
            <label>Confirm Password:</label>
            <input type="password" required
              name="password2"
              placeholder='Confirm your password'
              value={credentials.password2}
              onChange={handleInputChange} />
          </div>
          <div className="field--wrapper">
            <input className='btn btn--lg btn--main' type="submit"></input>
          </div>
        </form>
        <p>Already have an account yet? Register <Link to="/login">Here</Link></p>
      </div>

    </div>
  )
}

export default RegisterPage