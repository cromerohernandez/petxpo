import React, { useContext, useEffect, useState } from 'react'

import FilterContext from '../../contexts/FilterContext'

import '../../stylesheets/UI/FilterButton.css'

const FilterButton = ({ type, onClick }) => {
  const filter = useContext(FilterContext)

  const [iconOn, setIconOn] = useState('')
  const [iconOff, setIconOff] = useState('')

  useEffect(() => {
    setIconOn(require(`../../assets/images/${type}IconOn.png`).default)
    setIconOff(require(`../../assets/images/${type}IconOff.png`).default)
  }, [type])

  return (
    <button 
      name={type} 
      onClick={onClick}
      className={"filterBtn" + (filter.typeFilter.includes(type) ? " filterBtn-on" : " filterBtn-off")}
    >
      
      <img 
        src={filter.typeFilter.includes(type) ? iconOn : iconOff}
        alt={`${type}Icon`}
        name={type}
        className="imgFilterBtn"
      />

    </button>
  )
}

export default FilterButton