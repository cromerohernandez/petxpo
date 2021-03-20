import { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';
import FirebaseService from '../services/FirebaseService';

import PetCard from './PetCard';

import '../stylesheets/App.css';

const Home = () => {
  const auth = useContext(AuthContext)

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

  const handleSignOut = () => {
    auth.signOut()
    return () => {
      setPets([]) && <Redirect to='/'/>
    }
  }

  return (
    <div className="App">
      <button onClick={handleSignOut}>←</button>

      {pets.map((pet, i) => (
        <PetCard pet={pet} key={i} />
      ))}
    </div>
  );
}

export default Home