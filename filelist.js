var fs = require('fs')
fs.readdir(process.argv[2], (error, files) => {
  if (error) {
    console.log(error.stack)
  }
  var filtered = files.filter((item) => {
    return item.endsWith('.' + process.argv[3] || '')
  })
  var out = ''
  filtered.forEach((item) => {
    out += item + '\n'
  })
  console.log(out.trim())
})
