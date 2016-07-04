var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var count = (buf.toString().match(/\n/g) || []).length
console.log(count)
