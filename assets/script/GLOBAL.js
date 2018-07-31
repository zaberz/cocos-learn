window.GLOBAL_DATA = {
    game: null
}

// 启用碰撞
// var manager = cc.director.getCollisionManager();
// manager.enabled = true;
// manager.enabledDebugDraw = true;

// 物理引擎
cc.director.getPhysicsManager().enabled = true
// cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit
cc.director.getPhysicsManager().debugDrawFlags = 0
// 设置重力
// cc.director.getPhysicsManager().gravity = cc.v2();