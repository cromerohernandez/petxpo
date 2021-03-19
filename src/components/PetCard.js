import LikeButton from './LikeButton'

const PetCard = ({ pet }) => {
  return (
    <div>
    <h2>{pet.name}</h2>
    <LikeButton id={pet.name} likes={pet.likes} />
  </div>
  )
}

export default PetCard