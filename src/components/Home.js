import { useContext, useState, useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';
import FilterContext from '../contexts/FilterContext';
import FirebaseService from '../services/FirebaseService';

import FilterButton from './UI/FilterButton';
import PetCard from './pets/PetCard';

import '../stylesheets/App.css';

const Home = () => {
  const auth = useContext(AuthContext)
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

  const handleSignOut = () => {
    auth.signOut()
    return () => {
      setPets([]) && <Redirect to='/'/>
    }
  }

  const handleType = (event) => {
    filter.handleTypeFilter(event)
    getPets()
  }

  return (
    <div className="App">
      <button onClick={handleSignOut}>←</button>
      {filter.petTypes.map((type, i) => (
        <FilterButton type={type} onClick={handleType} key={i} />
      ))}

      {pets.map((pet, i) => (
        <PetCard pet={pet} key={i} />
      ))}

    </div>
  );
}

export default Home