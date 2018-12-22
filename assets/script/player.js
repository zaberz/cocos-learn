let rigidbody = null;
// const {emitKeyboardEvent, emitDead} = require('connect');
cc.Class({
    extends: cc.Component,
    properties: {
        lostHealth: 0,
    },

    // onLoad () {},

    start() {
        this.setInputControler();

        let a = this.getComponent('cc.PhysicsBoxCollider');
        a.density = 1;
        a.apply();
        rigidbody = this.getComponent('cc.RigidBody');
        rigidbody.enabledContactListener = true;

        var mass = rigidbody.getMass();
    },
    setInputControler() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                rigidbody.applyForceToCenter(cc.p(-30000, 0));
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                rigidbody.applyForceToCenter(cc.p(30000, 0));

                break;
        }
        const {x, y, rotation} = this.node;
        rigidbody = this.getComponent('cc.RigidBody');
        let speed = rigidbody.linearVelocity;
        let velocity = rigidbody.angularVelocity;
        // emitKeyboardEvent({
        //     x, y, rotation,
        //     speedX: speed.x,
        //     speedY: speed.y,
        //     velocity,
        // });
    },
    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                rigidbody.applyForceToCenter(cc.p(0, 0));
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                rigidbody.applyForceToCenter(cc.p(0, 0));

                break;
        }
        const {x, y, rotation} = this.node;
        rigidbody = this.getComponent('cc.RigidBody');
        let speed = rigidbody.linearVelocity;
        let velocity = rigidbody.angularVelocity;
        // emitKeyboardEvent({
        //     x, y, rotation,
        //     speedX: speed.x,
        //     speedY: speed.y,
        //     velocity,
        // });
    },
    update(dt) {
        // if (this.movingLeft) {
        //     this.node.x -= this.xSpeed * dt
        // } else if (this.movingRight) {
        //     this.node.x += this.xSpeed * dt
        // }
        // let rigidbody = this.getComponent('cc.RigidBody')
        //
        // var mass = rigidbody.getMass()
        // console.log(mass)

        // if (!this.isInPlatform) {
        //     this.ySpeed += this.g * dt
        //     this.node.y -= this.ySpeed * dt
        // } else {
        //     this.node.y = this.withPlatform.node.y
        // }

        let progress = GLOBAL_DATA.game.healthProgress.getComponent('cc.ProgressBar').progress;
        if (this.lostHealth !== 0) {
            if (progress <= 0) {
                GLOBAL_DATA.game.healthProgress.getComponent('cc.ProgressBar').progress = 0;
                this.node.dispatchEvent(new cc.Event.EventCustom('die', true));
                emitDead();
            } else {
                GLOBAL_DATA.game.healthProgress.getComponent('cc.ProgressBar').progress -= this.lostHealth * 0.01;
            }

        } else {
            if (progress < 1) {
                GLOBAL_DATA.game.healthProgress.getComponent('cc.ProgressBar').progress += 0.01;
            }
        }
    },
    // onCollisionEnter(other, self) {
    //     console.log('enter')
    // },
    onBeginContact(contact, self, other) {
        if (other.node.group !== 'platform' && other.node.group !== 'player') {
            // 掉血
            this.lostHealth += 1;
        }
    },
    onEndContact(contact, self, other) {
        if (other.node.group !== 'platform' && other.node.group !== 'player') {
            this.lostHealth -= 1;
        }
    },

});
