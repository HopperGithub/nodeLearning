const fs = require('fs'),
    path = require('path'),
    filepath = process.argv[2],
    fileext = '.' + process.argv[3]
fs.readdir(filepath, function (err, list) {
    if (err) return console.error(err);
    list.length && list.forEach(f => {
        if (path.extname(f) === fileext) console.log(f)
    });
})