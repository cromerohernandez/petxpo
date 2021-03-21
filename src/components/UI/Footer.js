import React, { useContext } from 'react'

import AuthContext from '../../contexts/AuthContext';

import petxpoIcon from '../../assets/images/PetxpoIcon.png'
import clikaliaIcon from '../../assets/images/ClikaliaIcon.png'

import '../../stylesheets/UI/Footer.css'

const Footer = () => {
  const auth = useContext(AuthContext)

  if (auth.currentUser) {
    return (
      <footer className='containerFooter'>
        <div className='textContainerFooter'>
          <img src={petxpoIcon} alt='petxpoIcon' className='iconFooter'/>
          <p className='textFooter'>by <strong>CromeroH</strong> to</p>
          <img src={clikaliaIcon} alt='clikaliaIcon' className='iconFooter'/>
        </div>
      </footer>
    )
  } else {
    return null
  }
}

export default Footer