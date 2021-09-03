
module.exports = {
  load: catalog => {
    catalog.radioStations = catalog.radioStations || []
    catalog.api.radioStations = {
      create: require('./api/radiostations.add.js'),
      get: require('./api/radiostations.get.js'),
      list: require('./api/radiostations.list.js'),
      remove: require('./api/radiostations.remove.js'),
      update: require('./api/radiostations.update.js')
    }
    return catalog
  }
}
