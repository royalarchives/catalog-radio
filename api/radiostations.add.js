module.exports = (catalog, options) => {
  catalog.radioStations.push({
    type: 'station',
    id: `radio_${catalog.radioStations.length + 1}`,
    title: options.title,
    url: options.url
  })
  catalog.indexArray([catalog.radioStations[catalog.radioStations.length - 1]])
  catalog.writeSupplementalData()
}
