var app = require('http').createServer(handler)
var io = require('socket.io')(app)
var fs = require('fs')
const url = require('url')
const path = require('path')
const root = path.resolve(__dirname, '../build/web-mobile')

app.listen(9999)

var canvasStatus = {
    width: 750,
    height: 1334
}

let playerPool = {}

function handler(req, res) {
    let pathname = url.parse(req.url).pathname
    if (pathname === '/') {
        pathname = '/index.html'
    }
    console.log(pathname)
    const filepath = path.join(root, pathname)
    console.log(filepath)
    fs.stat(filepath, (err, stats) => {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + res.url)
            // 发送200响应:
            res.writeHead(200)
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(res)
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + res.url)
            // 发送404响应:
            res.writeHead(404)
            res.end('404 Not Found')
        }
    })
}

io.on('connection', function (socket) {
    socket.on('enter', (data = {}) => {
        playerPool[socket.client.id] = data
        socket.broadcast.emit('newPlayer', {
            name: data.name,
            id: socket.client.id
        })
        socket.emit('checkOk', playerPool)
    })

    socket.on('keyboardEvent', (data) => {
        console.log(data)
        socket.broadcast.emit('enemyMove', data)
    })

    socket.on('dead', (id) => {
        delete playerPool[id]
    })

    socket.on('disconnect', (e, a) => {
        console.log('disconnect')
        console.log(socket)
        console.log(e)
        console.log(a)
        delete playerPool[socket.id]
    })
})
setInterval(() => {
    io.emit('spawnNewPlatform', spawnPlatformPosition())
}, 2000)

function spawnPlatformPosition() {
    const y = -canvasStatus.height / 2
    const x = (Math.random() - 0.5) * canvasStatus.width
    return {x, y}
}