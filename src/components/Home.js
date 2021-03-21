import { useContext, useState, useCallback, useEffect } from 'react';

import FilterContext from '../contexts/FilterContext';
import FirebaseService from '../services/FirebaseService';

import FilterButton from './UI/FilterButton';
import PetCard from './pets/PetCard';

import '../stylesheets/Home.css';

const Home = () => {
  const filter = useContext(FilterContext)

  const [pets, setPets] = useState([]);

  const getPets = useCallback(() => {
    FirebaseService.getPets(filter.typeFilter)
      .then(pets => {
        setPets(pets)
      })
      .catch(error => {
        console.log(error)
      })
  }, [filter.typeFilter])

  useEffect(() => {
    getPets()
  }, [getPets]);

  const handleType = (event) => {
    filter.handleTypeFilter(event)
    getPets()
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
        {pets.map((pet, i) => (
          <PetCard pet={pet} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home