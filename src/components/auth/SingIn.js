import React, { useContext, useState } from 'react'

import AuthContext from '../../contexts/AuthContext'
import FirebaseService from '../../services/FirebaseService'

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const validators = {
  email: val => val.match(EMAIL_PATTERN),
  password: val => val
}

const errorMessages = {
  email: 'invalid email format',
  password: 'password is required',
  login: 'invalid email or password'
}

const SignIn = () => {
  const auth = useContext(AuthContext)

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: true,
    password: true,
  })

  const [touch, setTouch] = useState({})

  const [loginError, setLoginError] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target

    setData({
      ...data,
      [name]: value
    })
  }

  const onBlur = (event) => {
    const { name, value } = event.target
    const valid = validators[name](value)

    setTouch({
      ...touch,
      [name]: true
    })

    setErrors({
      ...errors,
      [name]: !valid
    })
  }

  const anyError = () => Object.values(errors).some(x => x === true)

  const handleSubmit = (event) => {
    event.preventDefault()

    FirebaseService.signIn(data)
      .then(userId => {
        auth.setUser(userId)
      })
      .catch(error => {
        console.log(error.message)
        setLoginError(true)
      })
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          placeholder="email"
          value={data.email}
          onBlur={onBlur}
          onChange={onChange}  
        />
        {touch.email && errors.email && (
          <div>
            { errorMessages.email }
          </div>
        )}

        <input
          type='password'
          name='password'
          placeholder="password"
          value={data.password}
          onBlur={onBlur}
          onChange={onChange}  
        />
        {touch.password && errors.password && (
          <div>
            { errorMessages.password }
          </div>
        )}

        {loginError && (
          <div>
            { errorMessages.login }
          </div>
        )}

        <button disabled={anyError()} type="submit">Sign in</button>

      </form>

    </div>
  )
}

export default SignIn