const http = require('http')

function get (index) {
    if (index === process.argv.length) return;
    url = process.argv[index]
    http.get(url, resp => {
        var str = '';
        resp.setEncoding('utf8')
        resp.on('data', data => str += data)
        resp.on('end', () => {
            console.log(str);
            index++
            get(index);
        })
        resp.on('error', console.error)
    }).on('error', console.error)
}
get(2)