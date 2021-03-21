import React, { useState, useCallback, useEffect } from 'react'


const Carousel = ({ inputPets, getPets }) => {
  const [pets, setPets] = useState([inputPets]);

  const addInputPets = useCallback(() => {
    getPets()
    setPets(inputPets)
  }, [inputPets, setPets])

  useEffect(() => {
    addInputPets()
  }, [pets])

  if (pets) {
    return (
      <div className="containerCarousel">
        {pets.map((pet,i) => {
          <h6 key={i}>{pet.name}</h6>
        })}
      </div>
    )
  } else {
    return null
  }
}

export default Carousel

/*  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };*/