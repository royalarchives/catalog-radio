module.exports = (library, options) => {
  const radioStation = library.getObject(options.id)
  if (!radioStation) {
    throw new Error('invalid-id')
  }
  return radioStation
}
