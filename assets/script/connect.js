// const io = require('socket.io-client')
// const socket = io(`${location.protocol}//${location.hostname}:9999`)
// window.GLOBAL_DATA.connectHandler = socket
// socket.on('news', (data) => {
//     socket.emit('my other event', {my: 'data'})
// })
//
// socket.on('newPlayer', (data) => {
//     const key = data.id
//     const status = {
//         x: 0,
//         y: 0,
//         rotation: 0,
//         speedX: 0,
//         speedY: 0,
//         velocity: 0
//     }
//     setTimeout(() => {
//         window.GLOBAL_DATA.game.spawnNewPlayer(key, status)
//     }, 1000)
// })
//
// socket.on('checkOk', (playerPool) => {
//     cc.director.loadScene('game')
//     setTimeout(() => {
//         for (let key in playerPool) {
//             if (key !== socket.id) {
//                 window.GLOBAL_DATA.game.spawnNewPlayer(key, playerPool[key])
//             }
//         }
//     }, 1000)
// })
// socket.on('enemyMove', (data) => {
//     window.GLOBAL_DATA.game.enemyMove(data)
// })
// socket.on('spawnNewPlatform', (data) => {
//     console.log(data)
//     window.GLOBAL_DATA.game.spawnNewPlatform(data)
// })
//
// const enter = function (name) {
//     socket.emit('enter', {name})
// }
//
// const emitDead = function () {
//     const id = socket.id
//     socket.emit('dead', {id})
// }
// const emitKeyboardEvent = function (param = {}) {
//     param.id = socket.id
//     socket.emit('keyboardEvent', param)
// }
//
// module.exports = {
//     enter,
//     emitDead,
//     emitKeyboardEvent
// }