const http = require('http'),
    url = process.argv[2]
http.get(url, function (resp) {
    resp.setEncoding('utf8')
    var str = '';
    resp.on('data', function (data) {
        str += data;
    })
    resp.on('error', console.error)
    resp.on('end', function () {
        console.log(str.length)
        console.log(str)
    })
}).on('error', console.error)