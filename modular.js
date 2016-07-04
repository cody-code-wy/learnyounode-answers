var myModule = require('./modular-module.js')
myModule(process.argv[2], process.argv[3], (err, filter) => {
  if (err) {
    console.log(err.stack)
  }
  var out = ''
  filter.forEach((item) => {
    out += item + '\n'
  })
  console.log(out.trim())
})
