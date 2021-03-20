import { useState, useEffect, useCallback } from 'react'

import FirebaseService from '../services/FirebaseService'

import LikeButton from './LikeButton'

const PetCard = ({ pet }) => {
  const [likes, setLikes] = useState(0)

  const getLikes = useCallback(() => {
    FirebaseService.getLikes(pet.id)
    .then(petLikes => {
      setLikes(petLikes)
    })
    //.catch
  }, [likes])

  useEffect(() => {
    getLikes()
  }, [])

  return (
    <div>
    <h2>{pet.name}</h2>
    <img src={pet.photo} alt={`${pet.name}jpg`} />
    <div>
      <h6>{likes}</h6>
      <LikeButton id={pet.id} getLikes={getLikes} />
    </div>
  </div>
  )
}

export default PetCard