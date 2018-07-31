cc.Class({
    extends: cc.Component,

    properties: {
        btnRestart: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.btnRestart.on('touchstart', () => {
            cc.director.loadScene('game')
        })
    }

    // update (dt) {},
})
