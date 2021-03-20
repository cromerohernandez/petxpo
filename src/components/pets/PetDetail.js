import { useState, useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import FirebaseService from '../../services/FirebaseService'

import LikeButton from '../UI/LikeButton'

const PetDetail = () => {
  const { id } = useParams()
  const history = useHistory()
  const [pet, setPet] = useState([])


  const getPet = useCallback(() => {
    FirebaseService.getPet(id)
    .then(pet => {
      setPet(pet)
    })
    //.catch
  }, [id])

  useEffect(() => {
    getPet()
  }, [getPet])

  const handleBack = () => {
    history.push('/')
  }

  return (
    <div>
      <h6>{pet.name}</h6>
      <LikeButton petId={parseInt(id)} />
      <button onClick={handleBack}>←</button>
    </div>
  )
}

export default PetDetail