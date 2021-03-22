import React, { useContext } from 'react'

import AuthContext from '../../contexts/AuthContext'
import FilterContext from '../../contexts/FilterContext'

import logo from '../../assets/images/petxpoLogo.png'
import signOutIcon from '../../assets/images/signOutIcon.png'

import '../../stylesheets/UI/Navbar.css'

const Navbar = () => {
  const auth = useContext(AuthContext)
  const filter = useContext(FilterContext)

  const handleSignOut = () => {
    filter.resetTypeFilter()
    auth.signOut()
  }

  if (auth.currentUser) {
    return (
      <nav className='containerNavbar'>
            <a href="/" className='containerLogoNavbar'>
              <img src={logo} alt='PetxpoLogo' className='logoNavbar'/>
            </a>

            <button onClick={handleSignOut} className='btnNavbar'>
              <img src={signOutIcon} alt='SignOutIco' className='iconNavbar'/>
            </button>
            
      </nav>
    )
  } else {
    return null
  }
}

export default Navbar