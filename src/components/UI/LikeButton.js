import { useContext, useState, useCallback, useEffect } from 'react'

import AuthContext from '../../contexts/AuthContext'

import FirebaseService from '../../services/FirebaseService'

import likeIconOn from '../../assets/images/likeIconOn.png'
import likeIconOff from '../../assets/images/likeIconOff.png'

import '../../stylesheets/UI/LikeButton.css'

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

  }, [petId])
  
  const getUserLike = useCallback(() => {
    FirebaseService.getUserLike(auth.currentUser, petId)
      .then(userLike => {
        setUserLike(userLike)
      })
      //.catch
  }, [auth.currentUser, petId])

  useEffect(() => {
    getLikes()
    getUserLike()
  }, [getLikes, getUserLike])

  const handleLike = () => {
    FirebaseService.like(userLike.id, auth.currentUser, petId)
      .then(() => {
        getLikes()
        getUserLike()
      })
      //.catch()
  }
  
  return (
    <div className='containerLikeBtn'>
      <label className='labelLikeBtn'>{likes}</label>
      <img
        src={userLike ? likeIconOn : likeIconOff}
        alt='likeIcon'
        className='imgLikeBtn'
        onClick={handleLike}
      />
    </div>
  )
}

export default LikeButton