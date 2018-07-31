cc.Class({
    extends: cc.Component,

    properties: {
        inputName: {
            default: null,
            type: cc.Node
        },
        btnStart: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.btnStart.on('touchstart', () => {
            const name = this.inputName.getComponent('cc.EditBox').string
            console.log(name)

            GLOBAL_DATA.connectHandler.emit('enter', {
                name: name
            })
            // cc.director.loadScene('game')
        })
    }

    // update (dt) {},
})
