module.exports = (catalog, options) => {
  const radioStation = catalog.getObject(options.id)
  if (!radioStation) {
    throw new Error('invalid-id')
  }
  return radioStation
}
