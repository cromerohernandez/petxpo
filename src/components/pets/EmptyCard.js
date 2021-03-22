import React from 'react'

import '../../stylesheets/pets/PetCard.css'

const EmptyCard = () => {
  return (
    <div className='containerPetCard' id='containerPetCardBGcat'>
      <div className='imgContainerPetCard'>
        <p className='emptyTextEmptyCard'>there are no pets <br></br> for the current selection</p>
      </div>
    </div>
  )
}

export default EmptyCard