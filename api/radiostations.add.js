module.exports = (library, options) => {
  library.radioStations.push({
    type: 'station',
    id: `radio_${library.radioStations.length + 1}`,
    title: options.title,
    url: options.url
  })
  library.indexArray([library.radioStations[library.radioStations.length - 1]])
  library.writeSupplementalData()
}
