import { useContext, useState, useCallback, useEffect } from 'react'

import AuthContext from '../../contexts/AuthContext'

import FirebaseService from '../../services/FirebaseService'

const LikeButton = ({ id, getLikes }) => {
  const auth = useContext(AuthContext)

  const [userLike, setUserLike] = useState()

  const getUserLike = useCallback(() => {
    FirebaseService.getUserLike(auth.currentUser, id)
      .then(userLike => {
        setUserLike(userLike)
      })
      //.catch
  }, [userLike])

  useEffect(() => {
    getUserLike()
  }, [])

  const handleLike = () => {
    FirebaseService.like(userLike.id, auth.currentUser, id)
    getLikes()
    getUserLike()
  }
  
  return (
    <div>
      <button onClick={handleLike}>Like</button>
      {userLike && (
        <h6>Yes!</h6>
      )}
    </div>
  )
}

export default LikeButton