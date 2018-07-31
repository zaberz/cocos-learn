const Player = require('player')
cc.Class({
    extends: cc.Component,

    properties: {
        platformPrefab: {
            default: null,
            type: cc.Prefab
        },
        enemyPrefab: {
            default: null,
            type: cc.Prefab
        },
        player: {
            default: null,
            type: Player
        },
        healthProgress: {
            default: null,
            type: cc.Node
        },
        platformPoolLayer: {
            default: null,
            type: cc.Node
        }
    },

    onLoad() {
        GLOBAL_DATA.game = this
        this.platformPool = new cc.NodePool('platform')

        this.node.on('die', () => {
            cc.director.loadScene('gameOver')
        })

    },
    spawnNewPlayer(id, player) {
        let newEnemy = cc.instantiate(this.enemyPrefab)
        newEnemy.name = id
        this.node.addChild(newEnemy)
        newEnemy.setPosition(this.getNewPlatformPosition())
    },
    spawnNewPlatform(data) {
        var newPlatform = null
        // 使用给定的模板在场景中生成一个新节点
        if (this.platformPool.size() > 0) {
            newPlatform = this.platformPool.get(this) // this will be passed to Star's reuse method
        } else {
            newPlatform = cc.instantiate(this.platformPrefab)
        }
        // 将新增的节点添加到 Canvas 节点下面
        this.platformPoolLayer.addChild(newPlatform)
        newPlatform.setPosition(cc.p(data.x, data.y))
    },
    getNewPlatformPosition() {
        let y = -667
        let x = this.node.x / 2 * cc.randomMinus1To1()
        return cc.p(x, y)
    },
    start() {
    },

    enemyMove(data) {
        const id = data.id
        let enemy = this.node.getChildByName(id)
        // console.group()
        // console.log(this)
        // console.log(enemy)
        // console.groupEnd()

        const {x, y, rotation, speedX, speedY, velocity} = data
        enemy.x = x
        enemy.y = y
        enemy.rotation = rotation
        enemy.getComponent('cc.RigidBody').linearVelocity = cc.p(speedX, speedY)
        enemy.getComponent('cc.RigidBody').angularVelocity = velocity

    }
    // update (dt) {},
})
