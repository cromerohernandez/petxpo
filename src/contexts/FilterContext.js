import React, { useState } from 'react'

import FilterHelper from '../helpers/FilterHelper'

const FilterContext = React.createContext()

export const FilterContextProvider = (props) => {
  const petTypes = ['bird', 'cat', 'dog', 'fish']
  const [typeFilter, setTypeFilter] = useState([...petTypes])

  const handleTypeFilter = (event) => {
    const { name } = event.target
    const newTypes = FilterHelper.setType(typeFilter, name)

    setTypeFilter(newTypes)
  }

  const resetTypeFilter = () => {
    setTypeFilter([...petTypes])
  }

  const value = {
    petTypes: petTypes,
    resetTypeFilter: resetTypeFilter,
    typeFilter: typeFilter,
    handleTypeFilter: handleTypeFilter
  }

  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  )
}

export const WithFilterConsumer = (WrappedComponent) => (props) => (
  <FilterContext.Consumer>
    {(filterProps) => ( <WrappedComponent {...props} {...filterProps} />)}
  </FilterContext.Consumer>
)

export default FilterContext