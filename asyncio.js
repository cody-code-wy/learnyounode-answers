var fs = require('fs')
fs.readFile(process.argv[2], (error, buffer) => {
  if (error) {
    console.log(error.stack)
  }
  console.log((buffer.toString().match(/\n/g) || []).length)
})
