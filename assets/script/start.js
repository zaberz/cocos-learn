cc.Class({
    extends: cc.Component,

    properties: {
        inputName: {
            default: null,
            type: cc.Node,
        },
        btnStart: {
            default: null,
            type: cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.btnStart.on('touchstart', () => {
            const name = this.inputName.getComponent('cc.EditBox').string;

            // GLOBAL_DATA.connectHandler.emit('enter', {
            //     name: name
            // })
            cc.director.loadScene('game');

            setInterval(() => {
                window.GLOBAL_DATA.game.spawnNewPlatform(this.spawnPlatformPosition());
            }, 2000);

        });
    },

    spawnPlatformPosition() {

        const canvasStatus = {
            width: 750,
            height: 1334,
        };
        const y = -canvasStatus.height / 2;
        const x = (Math.random() - 0.5) * canvasStatus.width;
        return {x, y};
    },

// update (dt) {},
});
