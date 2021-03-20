import { Link } from 'react-router-dom'

import LikeButton from '../UI/LikeButton'

const PetCard = ({ pet }) => {
  return (
    <div>
    <h2>{pet.name}</h2>
    <Link to={`/pets/${pet.id}`}>
      <img src={pet.photo} alt={`${pet.name}jpg`} />
    </Link>
    <LikeButton petId={pet.id} />
  </div>
  )
}

export default PetCard