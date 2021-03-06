scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        if (hero.vy > 300) {
            info.changeLifeBy(-2)
        } else if (hero.vy < 300 && hero.vy > 200) {
            info.changeLifeBy(-1)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    // Turn the player to "Food" to avoid getting hit again
    sprite.setKind(SpriteKind.Food)
    info.changeLifeBy(-1)
    timer.after(500, function () {
        // Turn the player back to "Player" in 0.5 second
        sprite.setKind(SpriteKind.Player)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.isHittingTile(CollisionDirection.Bottom) || hero.isHittingTile(CollisionDirection.Left) || hero.isHittingTile(CollisionDirection.Right)) {
        hero.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(leftFacingImg)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(rightFacingImg)
})
let hero: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
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
rightFacingImg = img`
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
leftFacingImg = img`
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
hero = sprites.create(rightFacingImg, SpriteKind.Player)
controller.moveSprite(hero, 100, 0)
scene.cameraFollowSprite(hero)
tiles.setTilemap(tilemap`level`)
tiles.placeOnTile(hero, tiles.getTileLocation(4, 30))
hero.ay = 350
info.setLife(30)
game.onUpdateInterval(100, function () {
    if (hero.isHittingTile(CollisionDirection.Left) && hero.vy > 0) {
        hero.ay = 0
        hero.vy = 15
        hero.setImage(leftSwordOutImg)
    } else if (hero.isHittingTile(CollisionDirection.Right) && hero.vy > 0) {
        hero.ay = 0
        hero.vy = 15
        hero.setImage(rightSwordOutImg)
    } else {
        hero.ay = 350
        if (hero.image == leftSwordOutImg) {
            hero.setImage(leftFacingImg)
        } else if (hero.image == rightSwordOutImg) {
            hero.setImage(rightFacingImg)
        }
    }
})
