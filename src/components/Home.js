import { useContext, useState, useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';
import FirebaseService from '../services/FirebaseService';
import FiltersHelper from '../helpers/FiltersHelper'

import FilterButton from './UI/FilterButton'
import PetCard from './pets/PetCard';

import '../stylesheets/App.css';

const petTypes = ['bird', 'cat', 'dog', 'fish']

const Home = () => {
  const auth = useContext(AuthContext)

  const [pets, setPets] = useState([]);
  const [typeFilter, setTypeFilter] = useState(petTypes)

  const getPets = useCallback(() => {
    FirebaseService.getPets(typeFilter)
      .then(pets => {
        setPets(pets)
      })
      .catch(error => {
        console.log(error)
      })
  }, [pets, typeFilter])

  useEffect(() => {
    getPets()
  }, [typeFilter]);

  const handleSignOut = () => {
    auth.signOut()
    return () => {
      setPets([]) && <Redirect to='/'/>
    }
  }

  const handleType = (event) => {
    const { name } = event.target
    const newTypes = FiltersHelper.setType([...typeFilter], name)

    setTypeFilter(newTypes)
  }

  return (
    <div className="App">
      <button onClick={handleSignOut}>←</button>

      {petTypes.map((type, i) => (
        <FilterButton type={type} onClick={handleType} key={i} />
      ))}

      {pets.map((pet, i) => (
        <PetCard pet={pet} key={i} />
      ))}
    </div>
  );
}

export default Home