import { useState, useEffect, useCallback } from 'react'

import FirebaseService from '../services/FirebaseService';

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
  }, []);

  return (
    <div className="App">
      {pets.map((pet, i) => (
        <h2>{pet.name}</h2>
      ))}
    </div>
  );
}

export default Home