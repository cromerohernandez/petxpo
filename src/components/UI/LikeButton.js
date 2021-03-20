import { useContext, useState, useCallback, useEffect } from 'react'

import AuthContext from '../../contexts/AuthContext'

import FirebaseService from '../../services/FirebaseService'

const LikeButton = ({ petId }) => {
  const auth = useContext(AuthContext)

  const [likes, setLikes] = useState(0)
  const [userLike, setUserLike] = useState(null)

  const getLikes = useCallback(() => {
    FirebaseService.getPetLikes(petId)
    .then(petLikes => {
      setLikes(petLikes)
    })
    //.catch

  }, [petId, likes, userLike])
  
  const getUserLike = useCallback(() => {
    FirebaseService.getUserLike(auth.currentUser, petId)
      .then(userLike => {
        setUserLike(userLike)
      })
      //.catch
  }, [userLike])

  useEffect(() => {
    getLikes()
    getUserLike()
  }, [])

  const handleLike = () => {
    FirebaseService.like(userLike.id, auth.currentUser, petId)
      .then(() => {
        getLikes()
        getUserLike()
      })
      //.catch()
  }
  
  return (
    <div>
      <h6>{likes}</h6>
      <button onClick={handleLike}>Like</button>
      {userLike && (
        <h6>Yes!</h6>
      )}
    </div>
  )
}

export default LikeButton