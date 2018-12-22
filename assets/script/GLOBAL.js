window.GLOBAL_DATA = {
    game: null,
};

// 启用碰撞
// var manager = cc.director.getCollisionManager();
// manager.enabled = true;
// manager.enabledDebugDraw = true;

// 物理引擎
setTimeout(() => {

    console.log(cc.director);
    console.log(cc.director.getPhysicsManager());
    cc.director.getPhysicsManager().enabled = true;
    // cc.director.getPhysicsManager().debugDrawFlags = 0;

}, 1000);

// cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit
// 设置重力
// cc.director.getPhysicsManager().gravity = cc.v2();