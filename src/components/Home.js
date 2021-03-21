import { useContext, useState, useCallback, useEffect } from 'react';

import FilterContext from '../contexts/FilterContext';
import FirebaseService from '../services/FirebaseService';

import FilterButton from './UI/FilterButton';
import PetCard from './pets/PetCard';

import '../stylesheets/Home.css';

const Home = () => {
  const filter = useContext(FilterContext)

  const [pets, setPets] = useState([])
  const [currentIndexPets, setCurrentIndexPet] = useState(0)
  const [currentPet, setCurrentPet] = useState({})
  const [loading, setLoading] = useState(true)

  const getPets = useCallback(() => {
    FirebaseService.getPets(filter.typeFilter)
      .then(pets => {
        setPets(pets)
        setCurrentPet(pets[currentIndexPets])
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [filter.typeFilter, currentIndexPets])

  useEffect(() => {
    getPets()
  }, [getPets]);

  const handleType = (event) => {
    setLoading(true)
    filter.handleTypeFilter(event)
    getPets()
  }

  const handleChangePet = (event) => {
    const { value } = event.target
    let newCurrentIndexPet = currentIndexPets

    if (value > 0 & newCurrentIndexPet + 1 >= pets.length) {
      newCurrentIndexPet = 0
    } else if (value < 0 & newCurrentIndexPet - 1 < 0) {
      newCurrentIndexPet = pets.length - 1
    } else {
      newCurrentIndexPet = currentIndexPets + parseInt(value)
    }

    setCurrentIndexPet(newCurrentIndexPet)
    setCurrentPet(pets[newCurrentIndexPet])
  }

  return (
    <div className="home">
      <div className='containerFilterBtnsHome'>
        <label className='labelFilterBtnsHome'>What kind of friend are you looking for?</label>
        {filter.petTypes.map((type, i) => (
          <FilterButton type={type} onClick={handleType} key={i} />
        ))}
      </div>

      <div className='petsContainerHome'>
        <button value={-1} onClick={handleChangePet}>-</button>
        {loading && (
          <h6>loading</h6>
        )}
        {!currentPet && !loading && (
          <h6>select some kind of friend</h6>
        )}
        {currentPet && !loading && (
          <PetCard pet={currentPet}/>
        )}
        <button value={1} onClick={handleChangePet}>+</button>
      </div>

    </div>
  );
}

export default Home