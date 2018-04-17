const fs = require('fs'),
    path = require('path')

module.exports = function exportFile (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);
        const data = list.length && list.filter(f => path.extname(f) === '.' + ext);
        callback(null, data)
    })
}