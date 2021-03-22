import React, { useContext, useState } from 'react'

import AuthContext from '../../contexts/AuthContext'
import FirebaseService from '../../services/FirebaseService'

import logo from '../../assets/images/petxpoLogo.png'

import '../../stylesheets/auth/SignIn.css'

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
    <div className='containerSignIn'>
      <img src={logo} alt='PetxpoLogo' className='logoSignIn'/>

      <form onSubmit={handleSubmit} className='formSignIn'>
        <input
          type='text'
          name='email'
          placeholder="email"
          value={data.email}
          onBlur={onBlur}
          onChange={onChange}
          className='inputSignIn'
        />
        {touch.email && errors.email && (
          <div className='errorSignIn' >
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
          className='inputSignIn'  
        />
        {touch.password && errors.password && (
          <div className='errorSignIn' >
            { errorMessages.password }
          </div>
        )}

        <button disabled={anyError()} type="submit" className={'btnSignIn'}>Sign in</button>

        {loginError && (
          <div className='errorSignIn' >
            { errorMessages.login }
          </div>
        )}

      </form>

    </div>
  )
}

export default SignIn