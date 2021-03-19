import FirebaseService from '../services/FirebaseService'

const LikeButton = ({ id, likes }) => {
  const handleLike = () => {
    FirebaseService.like(id)
  }
  
  return (
    <div>
      <button onClick={handleLike}>{likes}</button>
    </div>
  )
}

export default LikeButton