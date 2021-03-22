import React from 'react'
import { Link } from 'react-router-dom'

import LikeButton from '../UI/LikeButton'

import '../../stylesheets/pets/PetCard.css'

const PetCard = ({ pet }) => {
  return (
    <div className='containerPetCard' id={'containerPetCardBG' + pet.type}>

      <div className='imgContainerPetCard'>
        <Link to={`/pets/${pet.id}`}>
          <img src={pet.photo} alt={`${pet.name}jpg`} className='imgPetCard'/>
        </Link>

        <div className='likeButtonPetCard'>
          <LikeButton petId={pet.id} />
        </div>

      </div>

      <h2 className='namePetCard'>{'· ' + pet.name + ' ·'}</h2>
      <h3 className='latemotivPetCard'>{'"' + pet.leitmotiv + '"'}</h3>
      
    </div>
  )
}

export default PetCard