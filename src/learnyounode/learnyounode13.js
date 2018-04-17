const http = require('http'),
    parseUrl = require('url').parse
const server = http.createServer((req, res) => {
    const u = parseUrl(req.url, true),
        pn = u.pathname,
        dt = new Date(u.query.iso)
    var result
    if (pn === '/api/parsetime') {
        result = {
            hour: dt.getHours(),
            minute: dt.getMinutes(),
            second: dt.getSeconds()
        }
    }
    if (pn === '/api/unixtime') {
        result = {
            unixtime: dt.getTime()
        }
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(400)
        res.end()
    }

})
server.listen(+process.argv[2])