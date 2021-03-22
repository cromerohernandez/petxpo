import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import FirebaseService from '../../services/FirebaseService'

import LikeButton from '../UI/LikeButton'

import clikaliaIcon from '../../assets/images/clikaliaIcon.png'
import backIcon from '../../assets/images/backIcon.png'

import '../../stylesheets/pets/PetDetail.css'

const PetDetail = () => {
  const { id } = useParams()
  const history = useHistory()
  const [pet, setPet] = useState([])


  const getPet = useCallback(() => {
    FirebaseService.getPet(id)
    .then(pet => {
      setPet(pet)
    })
    .catch(error => {
      console.log(error.message)
    })
  }, [id])

  useEffect(() => {
    getPet()
  }, [getPet])

  const handleBack = () => {
    history.push('/')
  }

  return (
    <div className='containerPetDetail'>
      <div className='containerLeftPetDetail' id={'containerPetDetailBG' + pet.type}>
        <img src={pet.photo} alt={`${pet.name}jpg`} className='imgPetDetail'/>
      </div>

      <div className='containerRightPetDetail'>
        <div>
          <h6 className='namePetDetail'>{pet.name}</h6>

          <div className='likeButtonPetDetail'>
            <LikeButton petId={parseInt(id)} />
          </div>

        </div>

        <div className='containerDataPetDetail'>
          <label className='labeDataPetDetail'>description</label>
          <h6 className='dataPetDetail'>{pet.description}</h6>
        </div>

        <div className='containerDataPetDetail'>
          <label className='labeDataPetDetail'>leitmotiv</label>
          <h6 className={'dataPetDetail labelLeitmotivPetDetail'}>"{pet.leitmotiv}"</h6>
        </div>

        <div className='containerDataPetDetail'>
          <img src={clikaliaIcon} alt='clikaliaIcon' className={'labeDataPetDetail iconPetDetail'}/>
          <h6 className='dataPetDetail'>{pet.housePreferences}</h6>
        </div>

        <button onClick={handleBack} className='backButtonPetDetail'>
          <img src={backIcon} alt='backIcon' className="backIconPetDetail"/>
        </button>

      </div>

    </div>
  )
}

export default PetDetail