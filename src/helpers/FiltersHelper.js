const setType = (typeArray, type) => {
  if (typeArray.includes(type)) {
    typeArray.splice(typeArray.indexOf(type), 1)
  } else {
    typeArray.push(type)
  }

  return typeArray
}

export default {
  setType
}