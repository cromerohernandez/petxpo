import React, { useContext } from 'react'

import AuthContext from '../../contexts/AuthContext'

import petxpoIcon from '../../assets/images/PetxpoIcon.png'
import clikaliaLogo from '../../assets/images/clikaliaLogo.png'

import '../../stylesheets/UI/Footer.css'

const Footer = () => {
  const auth = useContext(AuthContext)

  if (auth.currentUser) {
    return (
      <footer className='containerFooter'>
        <div className='textContainerFooter'>
          <img src={petxpoIcon} alt='petxpoIcon' className='iconFooter'/>
          <p className='textFooter'>dev by <strong>CromeroH</strong> to</p>
          <img src={clikaliaLogo} alt='clikaliaIcon' className='iconFooter'/>
        </div>
      </footer>
    )
  } else {
    return null
  }
}

export default Footer