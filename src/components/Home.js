import { useState, useEffect } from 'react'

import FirebaseService from '../services/FirebaseService';

import PetCard from './PetCard'

import '../stylesheets/App.css';

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    FirebaseService.getPets()
      .then(pets => {
        setPets(pets)
      })
      .catch(error => {
        console.log(error)
      })
  }, [pets]);

  return (
    <div className="App">
      {pets.map((pet, i) => (
        <PetCard pet={pet} key={i} />
      ))}
    </div>
  );
}

export default Home