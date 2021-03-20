const FilterButton = ({ type, onClick }) => {
  return (
    <button name={type} onClick={onClick} >{type}</button>
  )
}

export default FilterButton