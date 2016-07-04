var fs = require('fs')

module.exports = function getFiltered (directory, filter, callback) {
  fs.readdir(directory, (error, files) => {
    if (error) {
      return callback(error)
    }
    var filtered = files.filter((item) => {
      return item.endsWith('.' + filter || '')
    })
    callback(undefined, filtered)
  })
}
