const Player = require('player')
cc.Class({
    extends: cc.Component,

    properties: {
        ySpeed: 100,
        game: {
            default: null,
            serializable: false
        },
        player: {
            default: null,
            type: Player
        }
    },

    // onLoad () {},

    reuse() {
        console.log('reuse')
    },
    start() {
        this.player = GLOBAL_DATA.game.player
        let rigidbody = this.getComponent('cc.RigidBody')
        rigidbody.linearVelocity = cc.p(0, 100)
    },

    update(dt) {
        // let y = this.node.y
        // let top = GLOBAL_DATA.game.node.height / 2
        // if (y > top) {
        //     GLOBAL_DATA.game.platformPool.put(this.node)
        //     let time = cc.random0To1() * 2000
        //     setTimeout(() => {
        //         GLOBAL_DATA.game.spawnNewPlatform()
        //     }, time)
        //
        // }
    },
})
