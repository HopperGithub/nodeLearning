const exportFile = require('./program6.1'),
    path = process.argv[2],
    ext = process.argv[3]
exportFile(path, ext, function (err, data) {
    if (err) console.error(err)
    else data.forEach(n => console.log(n))
})