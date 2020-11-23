let rightSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . f f f f 2 f f . . . . . 
    . . f f e e e e f 2 f f . . . . 
    . f f e e e e e f 2 2 f f . . . 
    . f e e e e f f e e e e f . . . 
    . f f f f f e e 2 2 2 2 e f . . 
    f f f e 2 2 2 f f f f e 2 f . . 
    f f f f f f f f e e e f f f . . 
    f e f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 b f d d e f . . . 
    . . f e e e 4 d d d e e . c . . 
    . . . f 2 2 2 2 e e d d e c c c 
    . . . f 4 4 4 e 4 4 d d e c d d 
    . . . f f f f f e e e e . c c c 
    . . f f f f f f f f . . . c . . 
    . . f f f . . f f . . . . . . . 
    `
let leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 f f f f . . . . 
    . . . . f f 2 f e e e e f f . . 
    . . . f f 2 2 f e e e e e f f . 
    . . . f e e e e f f e e e e f . 
    . . f e 2 2 2 2 e e f f f f f . 
    . . f 2 e f f f f 2 2 2 e f f f 
    . . f f f e e e f f f f f f f f 
    . . f e e 4 4 f b e 4 4 e f e f 
    . . . f e d d f b 4 d 4 e e f . 
    . . c . e e d d d 4 e e e f . . 
    c c c e d d e e 2 2 2 2 f . . . 
    d d c e d d 4 4 e 4 4 4 f . . . 
    c c c . e e e e f f f f f . . . 
    . . c . . . f f f f f f f f . . 
    . . . . . . . f f . . f f f . . 
    `
let rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `
let leftFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `
let hero = sprites.create(rightFacingImg, SpriteKind.Player)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
tiles.setTilemap(tiles.createTilemap(hex`100020000102020202020202020202020202020201020202020202020202020202020202010202020202030202020202020202020102020202020202020202020202020201020202020202020201010101010101010202020202020202020202020202020202020202020202020202020202020202020202020202020202040202020202010101010102020202020202020202020202020201020202020202020201010102020202010202020202020101020202020202020102020202020102020202020202020201020201010102020202020202040202010202020202020202020202020202020102020202020202020202020202020201020202020202020101010102020202010202020202020201020202020202020102020202020101010202020203020201020202020202020102020202020202010202020202020201020202020202020102020202020202020202020202020201020202020202020202020202020202020202010102020202020202020202020202020102020202020202020202020202020201020202020202030202020202020202010202020202020202020202030202020102020202020202020202020202020202020202020202020202020202020202020202020201010102020202020202020202020202020202020202020202020202020202020202020201010101010101010101010101010101`, img`
    2...............
    2...............
    2.....2.........
    2...............
    2........2222222
    2...............
    ................
    ..........2.....
    22222...........
    ....2........222
    ....2......22...
    ....2.....2.....
    ....2..222......
    .2..2...........
    ....2...........
    ....2.......2222
    ....2.......2...
    ....2.....222...
    .2..2.......2...
    ....2.......2...
    ....2...........
    ....2...........
    .......22.......
    .......2........
    .......2......2.
    .......2........
    ...2...2........
    ................
    ............222.
    ................
    ................
    2222222222222222
    `, [myTiles.transparency16,sprites.dungeon.floorLightMoss,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorLockedNorth,sprites.dungeon.greenOuterNorth2], TileScale.Sixteen))
