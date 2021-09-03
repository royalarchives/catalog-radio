module.exports = (catalog, options) => {
  const radioStation = catalog.getObject(options.id)
  if (!radioStation) {
    throw new Error('invalid-id')
  }
  radioStation.title = options.title
  radioStation.url = options.url
  catalog.writeSupplementalData()
}
