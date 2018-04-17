const net = require('net')
const server = net.createServer(socket => {
    socket.on('error', console.error)
    socket.end(format() + '\n')
})
function format () {

    const dt = new Date(),
        e = (num) => {
            return num < 10 ? '0' + num : num;
        },
        y = dt.getFullYear(),
        m = e(dt.getMonth() + 1),
        d = e(dt.getDate()),
        hh = e(dt.getHours()),
        mm = e(dt.getMinutes())
    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm
}
server.listen(process.argv[2])