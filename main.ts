namespace SpriteKind {
    export const ResetTile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (HasKey == true) {
        Scene += 1
        SetupScene()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ResetTile, function (sprite, otherSprite) {
    justtelepored = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    HasKey = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Teleport 1`, function (sprite, location) {
    if (justtelepored == false && Scene == 1) {
        justtelepored = true
        mySprite.setPosition(218, 188)
    }
    if (justtelepored == false && Scene == 2) {
        justtelepored = true
        mySprite.setPosition(248, 200)
    }
})
function SetupScene () {
    if (Scene == 0) {
        HasKey = false
        tiles.setCurrentTilemap(tilemap`level4`)
        mySprite.setPosition(144, 16)
    } else if (Scene == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
        HasKey = false
        ResetTile1 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile1.setPosition(88, 88)
        ResetTile2 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile2.setPosition(104, 88)
        ResetTile3 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile3.setPosition(232, 200)
        ResetTile4 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile4.setPosition(248, 200)
        ResetTile5 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile5.setPosition(232, 136)
        ResetTile6 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile6.setPosition(248, 136)
        mySprite.setPosition(19, 18)
    } else if (Scene == 2) {
        HasKey = false
        tiles.setCurrentTilemap(tilemap`level2`)
        ResetTile1.setPosition(216, 232)
        ResetTile2.setPosition(216, 248)
        ResetTile3.setPosition(88, 8)
        ResetTile4.setPosition(88, 24)
        sprites.destroy(ResetTile5)
        sprites.destroy(ResetTile6)
        mySprite.setPosition(19, 18)
    } else if (Scene == 3) {
        game.splash("You won")
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Teleport 2`, function (sprite, location) {
    if (justtelepored == false && Scene == 1) {
        justtelepored = true
        mySprite.setPosition(58, 108)
    }
    if (justtelepored == false && Scene == 2) {
        justtelepored = true
        mySprite.setPosition(56, 56)
    }
})
let ResetTile6: Sprite = null
let ResetTile5: Sprite = null
let ResetTile4: Sprite = null
let ResetTile3: Sprite = null
let ResetTile2: Sprite = null
let ResetTile1: Sprite = null
let justtelepored = false
let HasKey = false
let Scene = 0
let mySprite: Sprite = null
game.splash("Your aMAZEing")
mySprite = sprites.create(assets.image`kitty`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
Scene = 0
SetupScene()
