import React, { useState } from 'react'

import FirebaseService from '../services/FirebaseService'

const AuthContext = React.createContext()

export const AuthContextProvider = (props) => {
  const [currentUserId, setCurrentUserId] = useState(JSON.parse(localStorage.getItem('user.id')))

  const setUser = (userId) => {
    localStorage.setItem('user.id', userId ? JSON.stringify(userId) : null)
    setCurrentUserId(userId)
  }

  const signOut = () => {
    FirebaseService.signOut()
      .then(() => {
        setUser()
      })
  }

  const value = {
    currentUserId: currentUserId,
    setUser: setUser,
    signOut: signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const WithAuthConsumer = (WrappedComponent) => (props) => (
  <AuthContext.Consumer>
    {(authProps) => (<WrappedComponent {...props} {...authProps} />)}
  </AuthContext.Consumer>
)

export default AuthContext