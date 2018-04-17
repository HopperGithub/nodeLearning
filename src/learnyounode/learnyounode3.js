const fs = require('fs'),
    content = fs.readFileSync(process.argv[2], 'utf8')
console.log(content.match(/\n/g).length)