import LikeButton from './LikeButton'

const PetCard = ({ pet }) => {
  return (
    <div>
    <h2>{pet.name}</h2>
    <img src={pet.photo} alt={`${pet.name}jpg`} />
    <LikeButton id={pet.id} likes={pet.likes} />
  </div>
  )
}

export default PetCard