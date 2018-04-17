const http = require('http'),
    map = require('through2-map')
const server = http.createServer((req, res) => {
    if (req.method !== 'POST') return res.end('request must be POST\n')
    req.pipe(map(chunk => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})
server.listen(+process.argv[2])